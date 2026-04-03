import { describe, it, expect } from 'vitest';
import catalog from '../assets/catalog.json';

describe('Catalog JSON — Integridad de datos', () => {
  it('tiene categorías definidas', () => {
    expect(catalog.categories).toBeDefined();
    expect(Array.isArray(catalog.categories)).toBe(true);
    expect(catalog.categories.length).toBeGreaterThan(0);
  });

  it('tiene exactamente 6 categorías de servicios', () => {
    expect(catalog.categories.length).toBe(6);
  });

  it('cada categoría tiene name, icon, description e image', () => {
    catalog.categories.forEach(cat => {
      expect(cat.name).toBeTruthy();
      expect(cat.icon).toBeTruthy();
      expect(cat.description).toBeTruthy();
      expect(cat.image).toBeTruthy();
      expect(cat.image).toMatch(/^https?:\/\//);
    });
  });

  it('cada categoría tiene al menos un servicio', () => {
    catalog.categories.forEach(cat => {
      expect(Array.isArray(cat.services)).toBe(true);
      expect(cat.services.length).toBeGreaterThan(0);
    });
  });

  it('cada servicio tiene name obligatorio', () => {
    catalog.categories.forEach(cat => {
      cat.services.forEach(svc => {
        expect(svc.name).toBeTruthy();
        expect(typeof svc.name).toBe('string');
      });
    });
  });

  it('los precios son números positivos cuando están presentes', () => {
    catalog.categories.forEach(cat => {
      cat.services.forEach((svc: any) => {
        if (svc.price !== undefined) {
          expect(typeof svc.price).toBe('number');
          expect(svc.price).toBeGreaterThan(0);
        }
        if (svc.original_price !== undefined) {
          expect(svc.original_price).toBeGreaterThan(svc.price ?? 0);
        }
      });
    });
  });

  it('contiene las categorías principales del spa', () => {
    const names = catalog.categories.map(c => c.name);
    expect(names).toContain('Consultas');
    expect(names).toContain('Faciales');
    expect(names).toContain('Corporales');
    expect(names).toContain('Masajes');
    expect(names).toContain('Depilación Láser');
    expect(names).toContain('Psicología y Bienestar');
  });

  it('los servicios con promo tienen formato de texto', () => {
    catalog.categories.forEach(cat => {
      cat.services.forEach((svc: any) => {
        if (svc.promo !== undefined) {
          expect(typeof svc.promo).toBe('string');
          expect(svc.promo.length).toBeGreaterThan(0);
        }
      });
    });
  });

  it('total de servicios del catálogo es mayor a 20', () => {
    const total = catalog.categories.reduce((sum, cat) => sum + cat.services.length, 0);
    expect(total).toBeGreaterThan(20);
  });
});

describe('UX — Métricas de calidad del catálogo', () => {
  it('las imágenes usan Unsplash con parámetros de calidad', () => {
    catalog.categories.forEach(cat => {
      expect(cat.image).toContain('unsplash.com');
      expect(cat.image).toContain('w=');
    });
  });

  it('las descripciones de categoría son legibles (>20 chars)', () => {
    catalog.categories.forEach(cat => {
      expect(cat.description.length).toBeGreaterThan(20);
    });
  });

  it('las categorías tienen iconos de Material Symbols', () => {
    const validIcons = ['medical_services', 'face_retouching_natural', 'self_improvement', 'bolt', 'spa', 'psychology'];
    catalog.categories.forEach(cat => {
      expect(validIcons).toContain(cat.icon);
    });
  });

  it('Silueta +40 tiene precio con descuento visible', () => {
    const corporales = catalog.categories.find(c => c.name === 'Corporales');
    const silueta = (corporales?.services as any[]).find(s => s.name.includes('Silueta'));
    expect(silueta).toBeDefined();
    expect(silueta.original_price).toBeGreaterThan(silueta.price);
  });

  it('depilación láser tiene promo 2x1 en cuerpo completo', () => {
    const laser = catalog.categories.find(c => c.name === 'Depilación Láser');
    const full = (laser?.services as any[]).find(s => s.name.includes('completo'));
    expect(full?.promo).toBe('2×1');
  });
});

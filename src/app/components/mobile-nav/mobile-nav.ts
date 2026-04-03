import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavItem {
  id: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-mobile-nav',
  imports: [CommonModule],
  templateUrl: './mobile-nav.html',
  styleUrl: './mobile-nav.scss',
})
export class MobileNavComponent {
  activeItem = signal<string>('medicina');

  items: NavItem[] = [
    { id: 'medicina',  icon: 'medical_services',  label: 'Medicina'  },
    { id: 'spa',       icon: 'spa',               label: 'Spa & Estética' },
    { id: 'precios',   icon: 'sell',              label: 'Precios'   },
    { id: 'contacto',  icon: 'mail',              label: 'Contacto'  },
  ];

  scrollTo(id: string): void {
    this.activeItem.set(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
  category: string;
  color: string;
}

@Component({
  selector: 'app-services-showcase',
  imports: [CommonModule],
  templateUrl: './services-showcase.html',
  styleUrl: './services-showcase.scss',
})
export class ServicesShowcaseComponent {
  services: Service[] = [
    {
      id: 'consultas',
      name: 'Consultas Médicas',
      icon: 'medical_services',
      description: 'Médica general y bariátrica con seguimiento personalizado',
      category: 'Medicina',
      color: 'bg-blue-50',
    },
    {
      id: 'faciales',
      name: 'Tratamientos Faciales',
      icon: 'face',
      description: 'Limpieza profunda, dermapen, fototerapia y más',
      category: 'Spa & Estética',
      color: 'bg-pink-50',
    },
    {
      id: 'corporales',
      name: 'Tratamientos Corporales',
      icon: 'spa',
      description: 'Moldeamiento, maderoterapia, silueta +40',
      category: 'Spa & Estética',
      color: 'bg-purple-50',
    },
    {
      id: 'depilacion',
      name: 'Depilación Láser',
      icon: 'light_mode',
      description: 'Tecnología láser de última generación',
      category: 'Spa & Estética',
      color: 'bg-yellow-50',
    },
    {
      id: 'masajes',
      name: 'Terapia de Masajes',
      icon: 'hand_therapy',
      description: 'Relajante, descontracturante, drenaje linfático',
      category: 'Bienestar',
      color: 'bg-green-50',
    },
    {
      id: 'psicologia',
      name: 'Psicología & Bienestar',
      icon: 'psychology',
      description: 'Atención psicológica y tanatología',
      category: 'Bienestar',
      color: 'bg-indigo-50',
    },
  ];

  scrollToCategory(categoryId: string): void {
    const el = document.getElementById('precios');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Podrías agregar lógica para destacar la categoría específica
    }
  }
}

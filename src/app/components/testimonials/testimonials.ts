import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatarColor: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      quote: 'Me hice el paquete Silueta +40 y los resultados fueron increíbles. El personal es muy profesional y el trato excelente.',
      name: 'Cliente de Google Maps',
      role: 'Tratamientos Corporales',
      avatarColor: 'bg-primary-fixed',
    },
    {
      quote: 'La limpieza facial profunda quedé muy contenta, mi piel se veía radiante. Definitivamente regreso por la renovación facial.',
      name: 'Cliente de Google Maps',
      role: 'Tratamientos Faciales',
      avatarColor: 'bg-secondary-container',
    },
    {
      quote: 'Excelente atención médica, la consulta general muy completa. El ambiente es muy agradable y el equipo muy amable.',
      name: 'Cliente de Google Maps',
      role: 'Consultas Médicas',
      avatarColor: 'bg-primary-fixed',
    },
  ];

  stars = [1, 2, 3, 4, 5];
}

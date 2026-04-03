import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatarColor: string;
  mapsUrl?: string;
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
      quote: 'Excelente lugar, todos los tratamientos que me he hecho me han encantado. Y la Doctora Lourdes es muy profesional y he visto resultados sorprendentes.',
      name: 'Cliente de Google Maps',
      role: 'Todos los servicios',
      avatarColor: 'bg-primary-fixed',
      mapsUrl: 'https://goo.gl/maps/Mp3sBnbvg5MF9PwC6',
    },
    {
      quote: 'Me hice el paquete Silueta +40 y los resultados fueron increíbles. El personal es muy profesional y el trato excelente.',
      name: 'Cliente de Google Maps',
      role: 'Tratamientos Corporales',
      avatarColor: 'bg-secondary-container',
    },
    {
      quote: 'La limpieza facial profunda quedé muy contenta, mi piel se veía radiante. Definitivamente regreso por la renovación facial.',
      name: 'Cliente de Google Maps',
      role: 'Tratamientos Faciales',
      avatarColor: 'bg-primary-fixed',
    },
  ];

  stars = [1, 2, 3, 4, 5];
}

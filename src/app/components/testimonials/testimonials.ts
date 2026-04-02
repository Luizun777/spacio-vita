import { Component } from '@angular/core';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatarColor: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      quote: 'El Centro de Bienestar Integral cambió mi forma de ver la salud. No solo me siento mejor físicamente, sino que he encontrado paz mental.',
      name: 'Elena Martínez',
      role: 'Paciente desde 2022',
      avatarColor: 'bg-primary-fixed',
    },
    {
      quote: 'Los planes de nutrición son excelentes. Muy fáciles de seguir y realmente personalizados a mis gustos y necesidades médicas.',
      name: 'Ricardo Sosa',
      role: 'Paciente de Nutrición',
      avatarColor: 'bg-secondary-container',
    },
    {
      quote: 'El área de spa es de otro mundo. Es mi refugio semanal para liberar el estrés del trabajo. Altamente recomendado.',
      name: 'Carla Benítez',
      role: 'Cliente Wellness',
      avatarColor: 'bg-primary-fixed',
    },
  ];

  stars = [1, 2, 3, 4, 5];
}

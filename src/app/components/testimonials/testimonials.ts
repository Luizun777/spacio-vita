import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
export class TestimonialsComponent implements AfterViewInit {
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

  ngAfterViewInit(): void {
    this.animateSection();
  }

  private animateSection(): void {
    const section = document.querySelector('#testimonios');
    if (!section) return;

    // Animate title
    gsap.fromTo(
      section.querySelector('.testimonials-title'),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
      }
    );

    // Animate testimonial cards with stagger and rotation
    gsap.fromTo(
      section.querySelectorAll('.testimonial-card'),
      { opacity: 0, y: 30, rotationX: 10 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
      }
    );
  }
}

import { Component, signal, AfterViewInit } from '@angular/core';
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
  activeIndex = 0;

  testimonials: Testimonial[] = [
    {
      quote:
        'Me hice el paquete Silueta +40 y los resultados fueron increíbles. El personal es muy profesional y el trato excelente.',
      name: 'Cliente de Google Maps',
      role: 'Tratamientos Corporales',
      avatarColor: 'bg-primary-fixed',
    },
    {
      quote:
        'La limpieza facial profunda quedé muy contenta, mi piel se veía radiante. Definitivamente regreso por la renovación facial.',
      name: 'Cliente de Google Maps',
      role: 'Tratamientos Faciales',
      avatarColor: 'bg-secondary-container',
    },
    {
      quote:
        'Excelente atención médica, la consulta general muy completa. El ambiente es muy agradable y el equipo muy amable.',
      name: 'Cliente de Google Maps',
      role: 'Consultas Médicas',
      avatarColor: 'bg-primary-fixed',
    },
  ];

  stars = [1, 2, 3, 4, 5];

  setActive(i: number): void {
    this.activeIndex = i;
  }

  ngAfterViewInit(): void {
    this.animateSection();
  }

  private animateSection(): void {
    const section = document.querySelector('#testimonios');
    if (!section) return;

    // Animate section header
    gsap.fromTo(
      section.querySelector('.testimonials-header'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
      }
    );

    // Animate feature quote block
    gsap.fromTo(
      section.querySelector('.testimonial-feature'),
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true,
        },
      }
    );

    // Animate testimonial cards with stagger
    gsap.fromTo(
      section.querySelectorAll('.testimonial-card'),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: section.querySelector('.grid'),
          start: 'top 85%',
          once: true,
        },
      }
    );
  }
}

import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SpaService {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-spa',
  imports: [],
  templateUrl: './spa.html',
  styleUrl: './spa.scss',
})
export class SpaComponent implements AfterViewInit {
  services: SpaService[] = [
    {
      icon: 'spa',
      title: 'Masajes',
      description: 'Relajante, descontracturante y drenaje linfático.',
    },
    {
      icon: 'face',
      title: 'Tratamientos Faciales',
      description: 'Facial básico, fototerapia, dermapen y limpieza profunda.',
    },
    {
      icon: 'self_improvement',
      title: 'Tratamientos Corporales',
      description: 'Moldeamiento, maderoterapia, depilación láser y más.',
    },
  ];

  ngAfterViewInit(): void {
    const section = document.querySelector('#spa');
    if (!section) return;

    // Image parallax on scroll
    const img = section.querySelector('.spa-parallax-img');
    if (img) {
      gsap.to(img, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    // Text block reveal
    gsap.fromTo(
      section.querySelector('.spa-eyebrow'),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 78%', once: true },
      }
    );

    gsap.fromTo(
      section.querySelector('.spa-headline'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.1,
        scrollTrigger: { trigger: section, start: 'top 78%', once: true },
      }
    );

    // Services list stagger
    gsap.fromTo(
      section.querySelectorAll('.spa-service-item'),
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.12,
        delay: 0.2,
        scrollTrigger: { trigger: section, start: 'top 75%', once: true },
      }
    );

    // CTA reveal
    gsap.fromTo(
      section.querySelector('.spa-cta'),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.5,
        scrollTrigger: { trigger: section, start: 'top 75%', once: true },
      }
    );
  }
}

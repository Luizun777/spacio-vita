import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface NutritionCard {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-nutrition',
  imports: [],
  templateUrl: './nutrition.html',
  styleUrl: './nutrition.scss',
})
export class NutritionComponent implements AfterViewInit {
  cards: NutritionCard[] = [
    {
      icon: 'eco',
      title: 'Planes Bio-Individuales',
      description: 'Diseñados específicamente para tu metabolismo y objetivos personales.',
    },
    {
      icon: 'restaurant',
      title: 'Talleres de Cocina',
      description: 'Aprende a preparar platos deliciosos y nutritivos en nuestras sesiones grupales.',
    },
  ];

  ngAfterViewInit(): void {
    this.animateSection();
  }

  private animateSection(): void {
    const section = document.querySelector('#nutricion');
    if (!section) return;

    // Animate title and subtitle
    gsap.fromTo(
      section.querySelector('.nutrition-title'),
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

    // Animate cards with stagger
    gsap.fromTo(
      section.querySelectorAll('.nutrition-card'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
      }
    );
  }
}

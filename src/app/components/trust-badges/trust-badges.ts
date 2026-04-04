import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Badge {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-trust-badges',
  imports: [CommonModule],
  templateUrl: './trust-badges.html',
  styleUrl: './trust-badges.scss',
})
export class TrustBadgesComponent implements AfterViewInit {
  badges: Badge[] = [
    {
      icon: '✓',
      title: 'Médicos Certificados',
      description: 'Equipo profesional con cédulas verificadas y especialidades acreditadas',
    },
    {
      icon: '🏥',
      title: 'Instalaciones Modernas',
      description: 'Equipamiento de última tecnología con estándares internacionales',
    },
    {
      icon: '🔒',
      title: 'Confidencialidad Total',
      description: 'Cumplimos LGPD y protegemos tus datos personales y médicos',
    },
    {
      icon: '⭐',
      title: '15+ Años',
      description: 'Más de 15 años de experiencia brindando atención de calidad',
    },
  ];

  ngAfterViewInit(): void {
    this.animateBadges();
  }

  private animateBadges(): void {
    const section = document.querySelector('#trust-badges');
    if (!section) return;

    gsap.fromTo(
      section.querySelector('.badges-header'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 85%', once: true },
      }
    );

    gsap.fromTo(
      section.querySelectorAll('.badge-item'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: {
          amount: 0.3,
          from: 'start',
        },
        scrollTrigger: { trigger: section, start: 'top 80%', once: true },
      }
    );
  }
}

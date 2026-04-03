import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-medicine',
  imports: [],
  templateUrl: './medicine.html',
  styleUrl: './medicine.scss',
})
export class MedicineComponent implements AfterViewInit {
  specialties = ['MEDICINA GENERAL', 'BARIÁTRICA', 'SUEROTERAPIA', 'PSICOLOGÍA'];

  stats = [
    { value: '+500', label: 'Pacientes atendidos' },
    { value: '+8', label: 'Años de experiencia' },
    { value: '4', label: 'Especialidades' },
  ];

  scrollToContact(): void {
    const el = document.getElementById('contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  ngAfterViewInit(): void {
    const section = document.querySelector('#medicina');
    if (!section) return;

    // Header text reveal
    gsap.fromTo(
      section.querySelector('.medicine-eyebrow'),
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
      section.querySelector('.medicine-headline'),
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

    gsap.fromTo(
      section.querySelector('.medicine-body'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        delay: 0.2,
        scrollTrigger: { trigger: section, start: 'top 78%', once: true },
      }
    );

    gsap.fromTo(
      section.querySelectorAll('.specialty-tag'),
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.08,
        delay: 0.3,
        scrollTrigger: { trigger: section, start: 'top 78%', once: true },
      }
    );

    // Stats reveal
    gsap.fromTo(
      section.querySelectorAll('.medicine-stat'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.12,
        scrollTrigger: { trigger: section, start: 'top 70%', once: true },
      }
    );

    // Image reveal
    gsap.fromTo(
      section.querySelector('.medicine-image-wrap'),
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 75%', once: true },
      }
    );
  }
}

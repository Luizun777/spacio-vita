import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  image: string;
  credentials: string[];
}

@Component({
  selector: 'app-team',
  imports: [CommonModule],
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class TeamComponent implements AfterViewInit {
  team: TeamMember[] = [
    {
      name: 'Dra. Sandra Martínez',
      role: 'Médica General & Estética',
      specialty: 'Medicina Integral',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      credentials: ['Cédula Profesional Vigente', 'Especialista en Medicina Estética', '15+ años de experiencia'],
    },
    {
      name: 'Dr. Carlos López',
      role: 'Nutriólogo Especialista',
      specialty: 'Nutrición Integral',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      credentials: ['Nutriólogo Certificado', 'Especialista en Pérdida de Peso', '12+ años de experiencia'],
    },
    {
      name: 'Lic. Sofía Rodríguez',
      role: 'Psicóloga & Tanatóloga',
      specialty: 'Salud Mental',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      credentials: ['Psicóloga Clínica', 'Tanatóloga Certificada', '10+ años de experiencia'],
    },
    {
      name: 'Lic. Marco Gutiérrez',
      role: 'Terapeuta de Masajes',
      specialty: 'Terapias Holísticas',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      credentials: ['Masajista Profesional', 'Especialista en Drenaje Linfático', '8+ años de experiencia'],
    },
  ];

  ngAfterViewInit(): void {
    this.animateTeam();
  }

  private animateTeam(): void {
    const section = document.querySelector('#team');
    if (!section) return;

    gsap.fromTo(
      section.querySelector('.team-header'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 80%', once: true },
      }
    );

    gsap.fromTo(
      section.querySelectorAll('.team-card'),
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: {
          amount: 0.5,
          from: 'start',
        },
        scrollTrigger: { trigger: section, start: 'top 75%', once: true },
      }
    );
  }
}

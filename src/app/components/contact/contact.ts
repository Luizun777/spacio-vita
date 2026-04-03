import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ContactForm {
  nombre: string;
  email: string;
  servicio: string;
  mensaje: string;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent implements AfterViewInit {
  form: ContactForm = {
    nombre: '',
    email: '',
    servicio: 'Consulta médica general',
    mensaje: '',
  };

  submitted = false;

  servicios = [
    'Consulta médica general',
    'Consulta bariátrica',
    'Masajes',
    'Tratamientos faciales',
    'Tratamientos corporales',
    'Depilación láser',
    'Tratamientos específicos',
    'Sueroterapia revitalizante',
    'Psicología / Tanatología',
  ];

  ngAfterViewInit(): void {
    this.animateSection();
  }

  private animateSection(): void {
    const section = document.querySelector('#contacto');
    if (!section) return;

    // Animate title
    gsap.fromTo(
      section.querySelector('.contact-title'),
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

    // Animate form with stagger
    gsap.fromTo(
      section.querySelectorAll('.contact-input'),
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
      }
    );

    // Animate submit button
    gsap.fromTo(
      section.querySelector('.contact-submit'),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
      }
    );
  }

  onSubmit(): void {
    this.submitted = true;
    // Aquí se conectaría con el servicio backend
    console.log('Formulario enviado:', this.form);
  }
}

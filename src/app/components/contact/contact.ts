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

    // Animate contact header
    gsap.fromTo(
      section.querySelector('.contact-header'),
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

    // Animate map
    gsap.fromTo(
      section.querySelector('.contact-map'),
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section.querySelector('.contact-map'),
          start: 'top 85%',
          once: true,
        },
      }
    );

    // Animate info panel (slide from left)
    gsap.fromTo(
      section.querySelector('.contact-info'),
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section.querySelector('.grid'),
          start: 'top 85%',
          once: true,
        },
      }
    );

    // Animate form panel (slide from right)
    gsap.fromTo(
      section.querySelector('.contact-form'),
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section.querySelector('.grid'),
          start: 'top 85%',
          once: true,
        },
      }
    );

    // Animate form inputs with stagger
    gsap.fromTo(
      section.querySelectorAll('.contact-input'),
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1,
        delay: 0.3,
        scrollTrigger: {
          trigger: section.querySelector('.contact-form'),
          start: 'top 85%',
          once: true,
        },
      }
    );

    // Animate submit button last
    gsap.fromTo(
      section.querySelector('.contact-submit'),
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.7,
        scrollTrigger: {
          trigger: section.querySelector('.contact-form'),
          start: 'top 85%',
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

  getWhatsappLink(): string {
    // Número: +52 1 55 3576 0433
    const phoneNumber = '525535760433';
    const message = encodeURIComponent('¡Hola! Me gustaría agendar una cita en Spacio Vita. ¿Cuál es la disponibilidad? 😊');
    return `https://wa.me/${phoneNumber}?text=${message}`;
  }
}

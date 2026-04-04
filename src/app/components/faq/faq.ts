import { Component, signal, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class FAQComponent implements AfterViewInit {
  activeIndex = signal<number | null>(null);

  faqs: FAQItem[] = [
    {
      question: '¿Cuál es el horario de atención?',
      answer: 'Atendemos de lunes a sábado, de 9:00 AM a 8:00 PM. Puedes agendar tu cita por WhatsApp al +52 1 55 3576 0433.',
      category: 'General',
    },
    {
      question: '¿Necesito referencia médica?',
      answer: 'No es obligatorio, pero si vienes por seguimiento médico, es recomendable traer tu historial. Para estética y spa no necesitas referencia.',
      category: 'Consultas',
    },
    {
      question: '¿Cuánto cuesta una consulta inicial?',
      answer: 'La consulta médica general cuesta $200 MXN. Las consultas especializadas varían. Consulta con nosotros para más detalles sobre servicios específicos.',
      category: 'Precios',
    },
    {
      question: '¿Puedo agendar en línea?',
      answer: 'Sí, puedes contactarnos por WhatsApp para agendar inmediatamente o llenar el formulario de contacto en nuestra página.',
      category: 'Agendar',
    },
    {
      question: '¿Qué seguros médicos aceptan?',
      answer: 'Trabajamos con la mayoría de seguros privados. Verifica con nosotros tu plan específico para conocer cobertura y deducibles.',
      category: 'Seguros',
    },
    {
      question: '¿Garantizan resultados en tratamientos?',
      answer: 'Todos nuestros tratamientos son realizados por especialistas certificados. Los resultados varían según el caso, pero garantizamos profesionalismo y calidad.',
      category: 'Tratamientos',
    },
    {
      question: '¿Hay estacionamiento?',
      answer: 'Sí, contamos con estacionamiento privado para nuestros clientes. Es completamente gratuito durante tu consulta o tratamiento.',
      category: 'Ubicación',
    },
    {
      question: '¿Puedo cancelar o reprogramar?',
      answer: 'Sí, puedes cancelar o reprogramar hasta 24 horas antes de tu cita sin costo. Contáctanos por WhatsApp para cambios.',
      category: 'Agendar',
    },
  ];

  ngAfterViewInit(): void {
    this.animateFAQ();
  }

  toggleFAQ(index: number): void {
    this.activeIndex.set(this.activeIndex() === index ? null : index);
  }

  private animateFAQ(): void {
    const section = document.querySelector('#faq');
    if (!section) return;

    gsap.fromTo(
      section.querySelector('.faq-header'),
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
      section.querySelectorAll('.faq-item'),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: {
          amount: 0.4,
          from: 'start',
        },
        scrollTrigger: { trigger: section, start: 'top 75%', once: true },
      }
    );
  }
}

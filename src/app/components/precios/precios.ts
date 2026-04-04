import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface Service {
  name: string;
  price?: number;
  original_price?: number;
  description?: string;
  promo?: string;
}

export interface Category {
  name: string;
  icon: string;
  description: string;
  image: string;
  services: Service[];
}

@Component({
  selector: 'app-precios',
  imports: [CommonModule],
  templateUrl: './precios.html',
  styleUrl: './precios.scss',
})
export class PreciosComponent implements OnInit, AfterViewInit {
  private http = inject(HttpClient);
  categories: Category[] = [];
  loaded = false;

  ngOnInit(): void {
    this.http.get<{ categories: Category[] }>('/catalog.json').subscribe({
      next: (data) => {
        this.categories = data.categories;
        this.loaded = true;
        // Re-run scroll trigger after data loads
        setTimeout(() => this.animateCards(), 100);
      },
      error: (err) => {
        console.error('Error cargando catalog.json:', err);
        // Fallback: mostrar datos vacíos pero marcar como cargado
        this.loaded = true;
      },
    });
  }

  ngAfterViewInit(): void {
    // Initial call (data may not be loaded yet)
    this.animateCards();
  }

  private animateCards(): void {
    const section = document.querySelector('#precios');
    if (!section) return;

    gsap.fromTo(
      section.querySelector('.precios-header'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 85%', once: true },
      }
    );

    gsap.fromTo(
      section.querySelectorAll('.precio-card'),
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: {
          amount: 0.6,
          from: 'start',
        },
        scrollTrigger: { trigger: section, start: 'top 80%', once: true },
      }
    );
  }
}

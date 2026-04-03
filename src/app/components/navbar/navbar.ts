import { Component, signal, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent implements AfterViewInit {
  activeSection = signal<string>('hero');
  isScrolled = signal<boolean>(false);
  mobileOpen = signal<boolean>(false);

  sections = [
    { id: 'nutricion', label: 'Nutrición' },
    { id: 'medicina',  label: 'Medicina'  },
    { id: 'spa',       label: 'Spa & Estética' },
    { id: 'precios',   label: 'Precios'   },
    { id: 'contacto',  label: 'Contacto'  },
  ];

  ngAfterViewInit(): void {
    ScrollTrigger.create({
      start: 'top -80',
      onEnter: () => this.isScrolled.set(true),
      onLeaveBack: () => this.isScrolled.set(false),
    });
  }

  scrollTo(id: string): void {
    this.activeSection.set(id);
    this.mobileOpen.set(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  toggleMobile(): void {
    this.mobileOpen.update(open => !open);
  }
}

import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  activeSection = signal<string>('medicina');

  sections = [
    { id: 'medicina',   label: 'Medicina'  },
    { id: 'spa',        label: 'Spa & Estética' },
    { id: 'servicios',  label: 'Servicios' },
    { id: 'precios',    label: 'Precios'   },
    { id: 'contacto',   label: 'Contacto'  },
  ];

  scrollTo(id: string): void {
    this.activeSection.set(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}

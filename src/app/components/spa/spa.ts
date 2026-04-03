import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SpaService {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-spa',
  imports: [CommonModule],
  templateUrl: './spa.html',
  styleUrl: './spa.scss',
})
export class SpaComponent {
  services: SpaService[] = [
    {
      icon: 'spa',
      title: 'Masajes',
      description: 'Relajante, descontracturante y drenaje linfático.',
    },
    {
      icon: 'face',
      title: 'Tratamientos Faciales',
      description: 'Facial básico, fototerapia, dermapen y limpieza profunda.',
    },
    {
      icon: 'self_improvement',
      title: 'Tratamientos Corporales',
      description: 'Moldeamiento, maderoterapia, depilación láser y más.',
    },
  ];
}

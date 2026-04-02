import { Component } from '@angular/core';

interface SpaService {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-spa',
  imports: [],
  templateUrl: './spa.html',
  styleUrl: './spa.scss',
})
export class SpaComponent {
  services: SpaService[] = [
    {
      icon: 'spa',
      title: 'Masajes Terapéuticos',
      description: 'Desde piedras calientes hasta técnicas de tejido profundo.',
    },
    {
      icon: 'self_care',
      title: 'Rituales de Belleza',
      description: 'Tratamientos faciales con extractos botánicos puros.',
    },
    {
      icon: 'pool',
      title: 'Circuito Hidrotermal',
      description: 'Piscinas de contraste y saunas aromáticas.',
    },
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  name: string;
  price?: number;
  original_price?: number;
  description?: string;
  promo?: string;
}

interface Category {
  name: string;
  services: Service[];
  image?: string;
}

@Component({
  selector: 'app-precios',
  imports: [CommonModule],
  templateUrl: './precios.html',
  styleUrl: './precios.scss',
})
export class PreciosComponent {
  categories: Category[] = [
    {
      name: 'Consultas',
      image: 'https://source.unsplash.com/1024x768/?medical%20consultation%20doctor%20patient',
      services: [
        {
          name: 'Consulta médica general',
          price: 200,
          description: 'Certificados médicos, prueba COVID y más',
        },
        {
          name: 'Consulta bariátrica',
          price: 500,
          description: 'Control de peso',
        },
      ],
    },
    {
      name: 'Faciales',
      image: 'https://source.unsplash.com/1024x768/?facial%20treatment%20spa%20beauty%20skincare',
      services: [
        { name: 'Facial básico', price: 500 },
        { name: 'Facial fototerapia', price: 800 },
        { name: 'Dermapen facial', price: 1200 },
        { name: 'Dermapen con medicamento', price: 1840 },
        { name: 'Limpieza facial profunda', price: 1500, promo: '2x2500' },
        { name: 'Diagnóstico facial médico', price: 250 },
        { name: 'Renovación facial', price: 2000, promo: '2x2000' },
      ],
    },
    {
      name: 'Corporales',
      image: 'https://source.unsplash.com/1024x768/?body%20massage%20therapy%20spa%20wellness',
      services: [
        {
          name: 'Silueta +40',
          price: 4500,
          original_price: 8500,
          description: 'Reduce y moldea con aparatología',
        },
        {
          name: 'Moldeamiento con aparatología',
          description: 'Carboxiterapia, lipolaser, radiofrecuencia, cavitación y vacuum',
        },
        {
          name: 'Moldea con maderoterapia',
          price: 3200,
          description: '5 sesiones + 2 vendas calientes',
        },
        { name: 'Piel de naranja', price: 1500, promo: '3x2' },
      ],
    },
    {
      name: 'Depilación láser',
      image: 'https://source.unsplash.com/1024x768/?laser%20hair%20removal%20clinic%20beauty',
      services: [
        { name: 'Cuerpo completo', price: 12900, promo: '2x1' },
        { name: 'Axila y bikini', price: 999 },
        { name: 'Piernas', price: 799 },
        { name: 'Espalda completa', price: 1199 },
      ],
    },
    {
      name: 'Masajes',
      image: 'https://source.unsplash.com/1024x768/?therapeutic%20massage%20spa%20relaxation',
      services: [
        { name: 'Relajante', price: 650 },
        { name: 'Descontracturante', price: 650 },
        { name: 'Drenaje linfático', price: 800 },
        { name: 'Paquete masajes', price: 990, promo: '2x990' },
      ],
    },
    {
      name: 'Psicología y Bienestar',
      image: 'https://source.unsplash.com/1024x768/?psychology%20counseling%20therapy%20office',
      services: [
        { name: 'Sueroterapia revitalizante', price: 999 },
        {
          name: 'Psicología / Tanatología',
          description: 'Atención a niños, adolescentes y adultos',
        },
      ],
    },
  ];
}

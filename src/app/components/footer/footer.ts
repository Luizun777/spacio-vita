import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  navLinks = [
    { label: 'Nutrición',     href: '#nutricion' },
    { label: 'Medicina',      href: '#medicina'  },
    { label: 'Spa & Estética', href: '#spa'       },
    { label: 'Precios',       href: '#precios'   },
    { label: 'Contacto',      href: '#contacto'  },
  ];

  links = [
    { label: 'Privacidad', href: '#' },
    { label: 'Términos',   href: '#' },
  ];
}

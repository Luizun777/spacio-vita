import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  scrollToContact(): void {
    const el = document.getElementById('contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToServices(): void {
    const el = document.getElementById('nutricion');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}

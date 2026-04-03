import { Component, OnInit, AfterViewInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.animateHero();
  }

  private animateHero(): void {
    const timeline = gsap.timeline();

    // Fade in and slide down the badge
    timeline.fromTo(
      '.hero-badge',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      0
    );

    // Fade in and slide down the title
    timeline.fromTo(
      'h1',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      0.2
    );

    // Fade in and slide down the description
    timeline.fromTo(
      '.hero-description',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      0.4
    );

    // Animate buttons with stagger
    timeline.fromTo(
      '.hero-buttons button',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.15 },
      0.6
    );

    // Subtle background zoom
    timeline.fromTo(
      '.hero-bg-image',
      { scale: 1.05 },
      { scale: 1, duration: 3, ease: 'power1.inOut' },
      0
    );
  }

  scrollToContact(): void {
    const el = document.getElementById('contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToServices(): void {
    const el = document.getElementById('nutricion');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}

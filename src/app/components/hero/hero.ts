import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.runPreloaderThenAnimate();
  }

  private runPreloaderThenAnimate(): void {
    const tl = gsap.timeline({ onComplete: () => this.animateHero() });

    // Progress bar fills
    tl.to('.preloader-bar', {
      width: '100%',
      duration: 1.2,
      ease: 'power2.inOut',
    });

    // Brand name fades in
    tl.to(
      '.preloader-brand',
      {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      },
      '-=0.4'
    );

    // Preloader fades out
    tl.to(
      '.hero-preloader',
      {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        pointerEvents: 'none',
      },
      '+=0.4'
    );

    // Remove preloader from layout after fade
    tl.set('.hero-preloader', { display: 'none' });
  }

  private animateHero(): void {
    const tl = gsap.timeline();

    // Background scale: 1.1 → 1
    tl.to(
      '.hero-bg',
      { scale: 1, duration: 4, ease: 'power1.inOut' },
      0
    );

    // Line 1 slides up from overflow hidden parent
    tl.to(
      '.hero-line-1 span',
      { translateY: '0%', duration: 0.9, ease: 'power3.out' },
      0.1
    );

    // Line 2 slides up with slight stagger
    tl.to(
      '.hero-line-2 span',
      { translateY: '0%', duration: 0.9, ease: 'power3.out' },
      0.25
    );

    // Eyebrow fades + slides up
    tl.fromTo(
      '.hero-eyebrow',
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
      0.05
    );

    // Bottom row
    tl.fromTo(
      '.hero-bottom',
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      0.7
    );

    // Scroll indicator
    tl.fromTo(
      '.hero-scroll',
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: 'power2.out' },
      1.2
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

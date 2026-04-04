import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newsletter',
  imports: [FormsModule, CommonModule],
  templateUrl: './newsletter.html',
  styleUrl: './newsletter.scss',
})
export class NewsletterComponent {
  email = signal<string>('');
  submitted = signal<boolean>(false);
  error = signal<string>('');

  onSubmit(): void {
    if (!this.email()) {
      this.error.set('Por favor ingresa un email válido');
      return;
    }

    // Simulate submission
    this.submitted.set(true);
    this.error.set('');
    this.email.set('');

    setTimeout(() => {
      this.submitted.set(false);
    }, 3000);
  }
}

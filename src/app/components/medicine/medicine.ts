import { Component } from '@angular/core';

@Component({
  selector: 'app-medicine',
  imports: [],
  templateUrl: './medicine.html',
  styleUrl: './medicine.scss',
})
export class MedicineComponent {
  specialties = ['MEDICINA GENERAL', 'BARIÁTRICA', 'SUEROTERAPIA', 'PSICOLOGÍA'];

  scrollToContact(): void {
    const el = document.getElementById('contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}

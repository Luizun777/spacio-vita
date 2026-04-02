import { Component } from '@angular/core';

@Component({
  selector: 'app-medicine',
  imports: [],
  templateUrl: './medicine.html',
  styleUrl: './medicine.scss',
})
export class MedicineComponent {
  specialties = ['CARDIOLOGÍA', 'DERMATOLOGÍA', 'ENDOCRINOLOGÍA'];
}

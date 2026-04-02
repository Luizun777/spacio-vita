import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ContactForm {
  nombre: string;
  email: string;
  servicio: string;
  mensaje: string;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  form: ContactForm = {
    nombre: '',
    email: '',
    servicio: 'Nutrición',
    mensaje: '',
  };

  submitted = false;

  servicios = ['Nutrición', 'Consulta Médica', 'Spa & Masajes', 'Check-up General'];

  onSubmit(): void {
    this.submitted = true;
    // Aquí se conectaría con el servicio backend
    console.log('Formulario enviado:', this.form);
  }
}

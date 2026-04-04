import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-float',
  imports: [],
  templateUrl: './whatsapp-float.html',
  styleUrl: './whatsapp-float.scss',
})
export class WhatsappFloatComponent {
  getWhatsappLink(): string {
    const phoneNumber = '525535760433';
    const message = encodeURIComponent('¡Hola! Me gustaría agendar una cita en Spacio Vita. ¿Cuál es la disponibilidad? 😊');
    return `https://wa.me/${phoneNumber}?text=${message}`;
  }
}

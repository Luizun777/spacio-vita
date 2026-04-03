import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  // Número de WhatsApp (formato internacional: 52 + número sin el 0)
  whatsappNumber = '5235760433';
  whatsappMessage = 'Hola, quiero más información sobre los servicios de Spacio Vita';

  // Método para generar el link de WhatsApp
  getWhatsappLink(): string {
    const encodedMessage = encodeURIComponent(this.whatsappMessage);
    return `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
  }

  // Método alternativo para llamada directa
  getPhoneLink(): string {
    return `tel:+52${this.whatsappNumber}`;
  }
}

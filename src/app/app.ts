import { Component } from '@angular/core';
import { NavbarComponent }      from './components/navbar/navbar';
import { HeroComponent }        from './components/hero/hero';
import { MedicineComponent }    from './components/medicine/medicine';
import { SpaComponent }         from './components/spa/spa';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { ContactComponent }     from './components/contact/contact';
import { FooterComponent }      from './components/footer/footer';
import { MobileNavComponent }   from './components/mobile-nav/mobile-nav';
import { PreciosComponent }     from './components/precios/precios';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    MedicineComponent,
    SpaComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    MobileNavComponent,
    PreciosComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}

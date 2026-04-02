import { Component } from '@angular/core';
import { NavbarComponent }      from './components/navbar/navbar';
import { HeroComponent }        from './components/hero/hero';
import { NutritionComponent }   from './components/nutrition/nutrition';
import { MedicineComponent }    from './components/medicine/medicine';
import { SpaComponent }         from './components/spa/spa';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { ContactComponent }     from './components/contact/contact';
import { FooterComponent }      from './components/footer/footer';
import { MobileNavComponent }   from './components/mobile-nav/mobile-nav';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    NutritionComponent,
    MedicineComponent,
    SpaComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    MobileNavComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}

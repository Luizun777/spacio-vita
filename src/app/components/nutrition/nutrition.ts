import { Component } from '@angular/core';

interface NutritionCard {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-nutrition',
  imports: [],
  templateUrl: './nutrition.html',
  styleUrl: './nutrition.scss',
})
export class NutritionComponent {
  cards: NutritionCard[] = [
    {
      icon: 'eco',
      title: 'Planes Bio-Individuales',
      description: 'Diseñados específicamente para tu metabolismo y objetivos personales.',
    },
    {
      icon: 'restaurant',
      title: 'Talleres de Cocina',
      description: 'Aprende a preparar platos deliciosos y nutritivos en nuestras sesiones grupales.',
    },
  ];
}

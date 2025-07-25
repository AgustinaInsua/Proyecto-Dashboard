import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
services = [
    {
      title: 'Massage',
      description: 'Relax with our expert massage sessions.',
      image: '/assets/imgs/massages.jpg'
    },
    {
      title: 'Pedicure & Manicure',
      description: 'Hands & feet pampering with polish & care.',
      image: '/assets/imgs/manicure.jpg'
    },
    {
      title: 'Definitive Depilation',
      description: 'Say goodbye to unwanted hair.',
      image: '/assets/imgs/depilation.jpg'
    },
    {
      title: 'Skin care',
      description: 'Facials & skincare to enhance your glow.',
      image: '/assets/imgs/skincare.jpg'
    }
  ];
}

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
      description: 'Relax and rejuvenate your body with our professional massage services.',
      image: '/assets/imgs/massages.jpg'
    },
    {
      title: 'Pedicure & Manicure',
      description: 'Indulge in our pedicure and manicure options to flaunt flawless hands and feet.',
      image: '/assets/imgs/manicure.jpg'
    },
    {
      title: 'Definitive Depilation',
      description: 'Say goodbye to unwanted hair with our permanent hair removal treatments.',
      image: '/assets/imgs/depilation.jpg'
    },
    {
      title: 'Skin care',
      description: 'Achieve radiant, blemish-free skin with our facial cleansing options.',
      image: '/assets/imgs/skincare.jpg'
    }
  ];
}

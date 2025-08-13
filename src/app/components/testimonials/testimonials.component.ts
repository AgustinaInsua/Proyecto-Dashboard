import { Component, Input } from '@angular/core';

export type Testimonial = {
  name: string;
  text: string;
  avatar?: string;
  role?: string;
};

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html'
})
export class TestimonialsComponent {
  @Input() title = 'What our Customers say about us';
  @Input() overline = 'Testimonials';

  @Input() items: Testimonial[] = [
    {
      name: 'Lau',
      text:
        'The skin care products are amazing! Since I started using them, my skin looks less shiny and more balanced.',
      avatar: 'assets/imgs/lau.png',
      role: 'Client',
    },
    {
      name: 'Mari',
      text:
        'An incredible experience! Impeccable pedicure and manicure that left my hands and feet soft and beautiful.',
      avatar: 'assets/imgs/mari.png',
      role: 'Client',
    },
    {
      name: 'Sofi',
      text:
        'Exceptional from start to finish. Deep cleansing and super friendly staff. I will definitely be back!',
      avatar: 'assets/imgs/sofi.png',
      role: 'Client',
    },
  ];
}
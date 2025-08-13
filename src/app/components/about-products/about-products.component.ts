import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about-products',
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about-products.component.html',
  styleUrl: './about-products.component.css'
})
export class AboutProductsComponent {

}

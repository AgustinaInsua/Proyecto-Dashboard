import { Component } from '@angular/core';
import { ServicesComponent } from "../services/services.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { AboutProductsComponent } from "../about-products/about-products.component";
import { Testimonial, TestimonialsComponent } from "../testimonials/testimonials.component";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'home',
  imports: [ServicesComponent, HeaderComponent, FooterComponent, AboutProductsComponent, TestimonialsComponent, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {

}

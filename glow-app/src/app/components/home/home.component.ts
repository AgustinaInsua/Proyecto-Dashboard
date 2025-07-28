import { Component } from '@angular/core';
import { ServicesComponent } from "../services/services.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { AboutProductsComponent } from "../about-products/about-products.component";

@Component({
  selector: 'app-home',
  imports: [ServicesComponent, HeaderComponent, FooterComponent, AboutProductsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export default class HomeComponent {

}

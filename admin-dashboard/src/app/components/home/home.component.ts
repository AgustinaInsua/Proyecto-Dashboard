import { Component } from '@angular/core';
import { ServicesComponent } from "../services/services.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home',
  imports: [ServicesComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Make sure this file exists in the same folder as home.component.ts
})
export default class HomeComponent {

}

import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { ContentComponent } from "../../shared/content/content.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, ContentComponent]
})
export class HomeComponent {

}

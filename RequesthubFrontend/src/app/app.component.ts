import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RequestCreateComponent } from './requests/request-create/request-create.component';
import { RequestAvailableComponent } from "./requests/request-available/request-available.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RequestCreateComponent, RequestAvailableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RequesthubFrontend';
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 👈 Import nécessaire
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent], // 👈 Ajout ici
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MyRide-front';
}

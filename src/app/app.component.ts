import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule  } from '@angular/material/button';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,MatToolbarModule,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'klijentske-veb-aplikacije-2025';
}

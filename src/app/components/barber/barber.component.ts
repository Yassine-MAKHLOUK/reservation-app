import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-barber',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './barber.component.html',
  styleUrl: './barber.component.css'
})
export class BarberComponent {

}

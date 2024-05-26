import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Subscription } from 'rxjs';
import { BaberServiceService } from '../../services/baber-service.service';
import { MatDialog } from '@angular/material/dialog';
import { BookingComponent } from '../booking/booking.component';



@Component({
  selector: 'app-barber',
  standalone: true,
  imports: [],
  templateUrl: './barber.component.html',
  styleUrl: './barber.component.css'
})
export class BarberComponent implements OnInit, OnDestroy {
  constructor(){}
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }


}

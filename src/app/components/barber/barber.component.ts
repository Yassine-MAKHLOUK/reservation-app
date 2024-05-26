import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { BookServiceService } from '../../services/book-service.service';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-barber',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './barber.component.html',
  styleUrls: ['./barber.component.css']
})
export class BarberComponent implements OnInit, OnDestroy {

  bookings: any[] = [];
  barberToken!: string;
  private subscription: Subscription = new Subscription();

  constructor(private bookingService: BookServiceService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.barberToken = this.getToken()!;
    if (this.barberToken) {
      this.getBarberBookings(this.barberToken);
    } else {
      console.error('No token found');
    }
  }

  getBarberBookings(barberName: string): void {
    this.subscription.add(
      this.bookingService.getBarberBookings(barberName).subscribe(
        data => {
          this.bookings = data.data;
          console.log('Barbers:', this.bookings);
        },
        error => {
          console.error('Error fetching barbers:', error);
        }
      )
    );
  }

  getToken(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('token');
    } else {
      console.error('localStorage is not available');
      return null;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

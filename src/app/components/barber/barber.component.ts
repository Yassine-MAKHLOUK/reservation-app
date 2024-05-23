import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Subscription } from 'rxjs';
import { BaberServiceService } from '../../services/baber-service.service';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../../auth/register/register.component';
import { BookingComponent } from '../booking/booking.component';

export interface barber {
  userId: string;
  email: string;
}

@Component({
  selector: 'app-barber',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './barber.component.html',
  styleUrl: './barber.component.css'
})
export class BarberComponent implements OnInit, OnDestroy {

  firstname: string | undefined;
  lastname: string | undefined;
  email: string | undefined;
  service: string | undefined;

  private subscription: Subscription = new Subscription;

  barbers: any[] = [];

  constructor(private barberService: BaberServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBarbers();
  }

  getBarbers(): void {
    this.barberService.getAllBarbers().subscribe(
      data => {
        this.barbers = data.data;
        console.log('Barbers:', this.barbers);
      },
      error => {
        console.error('Error fetching barbers:', error);
      }
    );
  }

  openBookingDialog(): void {
    const dialogRef = this.dialog.open(BookingComponent, {
      data: {firstname: this.firstname, lastname: this.lastname, email: this.email, service: this.service},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      result;
    });
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

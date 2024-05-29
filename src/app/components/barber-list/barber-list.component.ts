import { Component } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';
import { Subscription } from 'rxjs';
import { BaberServiceService } from '../../services/baber-service.service';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


export interface barber {
  userId: string;
  email: string;
}


@Component({
  selector: 'app-barber-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './barber-list.component.html',
  styleUrl: './barber-list.component.css'
})
export class BarberListComponent {

  firstname: string | undefined;
  lastname: string | undefined;
  email: string | undefined;
  service: string | undefined;
  barber: any | undefined;

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
        // console.log('Barbers:', this.barbers);
      },
      error => {
        console.error('Error fetching barbers:', error);
      }
    );
  }

  openBookingDialog(barber: any, service: string): void {
    this.barber = barber;
    const dialogRef = this.dialog.open(BookingComponent, {
      data: {barber: this.barber, firstname: this.firstname, lastname: this.lastname, email: this.email, service: service},
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

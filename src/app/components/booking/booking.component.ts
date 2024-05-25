import { Component, Inject, OnInit, inject } from '@angular/core';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from '../../auth/login/login.component';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { BookServiceService } from '../../services/book-service.service';

export interface BookingDialogData {
  barber: any,
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  Date: string;
}
export interface BookingObject {
  barberName: string,
  token: string;
  phone: string;
  date: string | null;
  service: string;
}

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
  templateUrl: './booking.component.html',
  providers:[provideNativeDateAdapter(), DatePipe],
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
  private subscription: Subscription = new Subscription;
  private reservation!: BookingObject;
  barber!: String;

  constructor(public datePipe: DatePipe,
    private bookService: BookServiceService,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BookingDialogData,){}

  ngOnInit(): void {
    
  }

  private fb = inject(FormBuilder);
  bookingForm = this.fb.group({
    phone:  [null, Validators.required],
    date: [null, Validators.required],
    service: [null, Validators.required],

  });

  hasUnitNumber = false;

  onSubmit(): void {
    if (this.bookingForm.valid) {
        this.reservation = {
          barberName: this.data.barber.barberName,
          phone: this.bookingForm.value.phone!,
          date: this.datePipe.transform(this.bookingForm.value.date, 'dd-MM-yyyy'),
          token: localStorage.getItem('token')!,
          service: this.bookingForm.value.service!,
        };

        console.log(this.reservation);
        

        this.bookService.book(this.reservation).subscribe({
          next: () => this.dialogRef.close(),
          error: (err) => console.error('Booking error', err)
        });
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

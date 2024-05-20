import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { BarberComponent } from './components/barber/barber.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [],
    },
    {
        path: 'book',
        component: BookingComponent,
        canActivate: [],
    },
    {
        path: 'barber',
        component: BarberComponent,
        canActivate: [],
    }
];

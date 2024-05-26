import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { BarberComponent } from './components/barber/barber.component';
import { BarberListComponent } from './components/barber-list/barber-list.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [],
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [],
    },
    {
        path: 'barber',
        component: BarberComponent,
        canActivate: [],
    },
    {
        path: 'barbers',
        component: BarberListComponent,
        canActivate: [],
    }
];

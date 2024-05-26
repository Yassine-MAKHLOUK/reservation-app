import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { BarberComponent } from './components/barber/barber.component';
import { BarberListComponent } from './components/barber-list/barber-list.component';
import { AdminComponent } from './components/admin/admin.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full' 
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [authGuard],
    },
    {
        path: 'barber',
        component: BarberComponent,
        canActivate: [authGuard],
    },
    {
        path: 'barbers',
        component: BarberListComponent,
        canActivate: [authGuard],
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

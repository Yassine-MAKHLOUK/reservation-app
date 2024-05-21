import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../auth/login/login.component';
import { RegisterComponent } from '../../auth/register/register.component';



export interface LoginDialogData {
  email: string;
  password: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  firstname: string | undefined;
  lastname: string | undefined;
  email: string | undefined;
  password: string | undefined;


  constructor(public dialog: MatDialog) {}

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      data: {email: this.email, password: this.password},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
       result;
    });
  }

  openRegisterDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      data: {firstname: this.firstname, lastname: this.lastname, email: this.email, password: this.password},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      result;
    });
  }
}

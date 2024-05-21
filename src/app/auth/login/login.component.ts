import { Component, Inject, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon';
import { AuthServiceService } from '../../services/auth-service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

export interface LoginDialogData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy {
  
  constructor(private authService : AuthServiceService,
    private router: Router,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LoginDialogData,
  ) {}
  ngOnInit(): void {
  }

  private subscription: Subscription = new Subscription;


  public showPassword: boolean = false;
  private fb = inject(FormBuilder);

  LoginForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
    

  });

  hasUnitNumber = false;

  login(credentials: any) {
    this.authService.login(credentials).subscribe(
      response => {
        console.log('Login successful', response);
        localStorage.setItem("token", response.data.token)
        // Handle successful login, e.g., store the token, navigate to another page
        this.router.navigate(['/barbers']); // Redirect to the "book" route

      },
      error => {
        console.error('Login failed', error);
        // Handle login failure, e.g., show an error message
      }
    );
  }

  onSubmit(){
    this.login(this.LoginForm.value);
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

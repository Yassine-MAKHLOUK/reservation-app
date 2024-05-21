import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon';

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
export class LoginComponent {
  
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LoginDialogData,
  ) {}

  public showPassword: boolean = false;
  private fb = inject(FormBuilder);

  LoginForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
    

  });

  hasUnitNumber = false;

  onSubmit(){
    console.log(this.LoginForm.value);
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}

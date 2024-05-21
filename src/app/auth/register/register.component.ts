import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent, LoginDialogData } from '../login/login.component';
import { MatRadioModule } from '@angular/material/radio';

export interface RegisterDialogData {
  firstname: string;
  lastname: string;
  gender: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-register',
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
    MatRadioModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RegisterDialogData,
  ) {}

  public showPassword: boolean = false;
  private fb = inject(FormBuilder);

  RegisterForm = this.fb.group({
    firstname: [null, Validators.required],
    lastname: [null, Validators.required],
    gender: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, Validators.required],
    

  });

  hasUnitNumber = false;

  onSubmit(){
    console.log(this.RegisterForm.value);
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}

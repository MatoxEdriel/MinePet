import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginComponent } from "../login/login/login.component";
import { RegisterComponent } from "../register/register/register.component";




@Component({
  selector: 'app-MainLogin',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatSnackBarModule,
    LoginComponent,
    RegisterComponent
  ],
  templateUrl: './MainLogin.component.html',
  styleUrls: ['./MainLogin.component.css']
})
export class MainLoginComponent implements OnInit {

  form!: FormGroup;
  showRegister: boolean = false;

  hidePassword: boolean = true;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }


  login() {

    if (this.form.valid) {
      console.log(this.form.value)

    }
    else {
      this.form.markAllAsTouched();
    }

  }


  ngOnInit() {
  }


}

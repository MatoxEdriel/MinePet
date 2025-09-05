import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/Auth.service';
import { ILoginRequest, ILoginResponse } from '../../../../interfaces/IUser.interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
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
    MatSnackBarModule
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() switchForm = new EventEmitter<void>();

  form!: FormGroup;

  hidePassword: boolean = true;

  constructor(
    private readonly router: Router,
    private readonly _authService: AuthService,
    private fb: FormBuilder) {
    this.form = this.fb.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  login() {
    if (this.form.valid) {
      const credentials = this.form.value;

      this._authService.login(credentials).subscribe({
        next: (response) => {
          console.log("funciona")
          localStorage.setItem('auth_token', response.data.token)
          this.router.navigate(['/dashboard'])
        },
        error: (err) => {
          console.log("gabriel arregla esto")


        }

      })


    } else {
      this.form.markAllAsTouched();


    }





  }



  switchToRegister() {
    this.switchForm.emit();
  }

  ngOnInit() {
  }

}

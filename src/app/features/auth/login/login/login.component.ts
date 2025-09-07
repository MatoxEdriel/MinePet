import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/Auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SHARED_COMPONENTS } from '../../../../shared/shared-components';
import { ILoginResponse, IResponse } from '../../../../interfaces/IUser.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...SHARED_COMPONENTS,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatSnackBarModule,
    
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
    private readonly route: ActivatedRoute,
    private readonly _snackBar: MatSnackBar,
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
        next: (response: IResponse<ILoginResponse>) => {
          localStorage.setItem('auth_token', response.data.token)
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
          this.router.navigateByUrl(returnUrl)

      },
       error: (err) => {
      let message = 'Ocurrió un error. Intenta nuevamente.';
      
      if (err.error?.error) {
        message = err.error.error; 
      } else if (err.error?.message) {
        message = err.error.message;
      }

      this._snackBar.open(message, 'Cerrar', { duration: 4000, panelClass: ['snack-error'] });
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

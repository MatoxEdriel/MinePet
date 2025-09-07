import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/Auth.service';
import { FieldMinepetComponent } from '../../../../shared/components/field-minepet/field-minepet.component';
import { ButtonnMinepetComponent } from '../../../../shared/components/buttonn-minepet/buttonn-minepet.component';
import { ILoginResponse, IResponse } from '../../../../interfaces/IUser.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FieldMinepetComponent, ButtonnMinepetComponent],
})
export class LoginComponent implements OnInit {
  @Output() switchForm = new EventEmitter<void>();

  form!: FormGroup;
  emailControl!: FormControl;
  passwordControl!: FormControl;
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private _authService: AuthService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.emailControl = this.form.get('email') as FormControl;
      this.passwordControl = this.form.get('password') as FormControl; 

  }

  login() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    const credentials = this.form.value;
    this._authService.login(credentials).subscribe({
      next: (response: IResponse<ILoginResponse>) => {
        localStorage.setItem('auth_token', response.data.token);
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
        this.router.navigateByUrl(returnUrl);
      },
      error: (err) => {
        let message = err.error?.error || err.error?.message || 'Ocurrió un error. Intenta nuevamente.';
        this._snackBar.open(message, 'Cerrar', { duration: 4000, panelClass: ['snack-error'] });
      }
    });
  }

  switchToRegister() {
    this.switchForm.emit();
  }
}
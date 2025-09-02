import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/Auth.service';
import { IFeeback, IUser } from '../../../../interfaces/IUser.interface';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() switchForm = new EventEmitter<void>();

  formUser!: FormGroup;
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;

  feedback : IFeeback = {
    success: '',
    error: ''
  }

  constructor(private fb: FormBuilder, private readonly _authService: AuthService) {}

  ngOnInit(): void {
    this.formUser = this.fb.group(
      {
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        phone: [''],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  // Validación para que las contraseñas coincidan
  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirm = control.get('confirmPassword')?.value;
    if (password !== confirm) {
      control.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      control.get('confirmPassword')?.setErrors(null);
    }
    return null;
  }

  register() {
    if (this.formUser.valid) {
      const user: IUser = this.formUser.value;
      this._authService.registerUser(user).subscribe({
        next: (res) => {
          console.log(JSON.stringify(user));
          this.feedback.success = res.message || 'Usuario Registrado Satisfactorio ';
          this.formUser.reset();
        },
      error: (err) => {
        console.log("si funciona xd" + user.name)
          this.feedback.error = err.error?.message || 'Ha ocurrido un error';
        },
      });
    } else {
      this.formUser.markAllAsTouched();
    }
  }

  switchToLogin() {
    this.switchForm.emit();
  }
}

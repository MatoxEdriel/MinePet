import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  {
    path: 'auth/login',
    loadComponent: () => import('./features/auth/login/login/login.component')
                          .then(m => m.LoginComponent)
  },

  { path: 'dashboard', component: LayoutComponent },  

  {
    path: 'auth/register',
    loadComponent: () => import('./features/auth/register/register/register.component')
                          .then(m => m.RegisterComponent)
  },

  { path: '**', redirectTo: 'auth/login' } 
];
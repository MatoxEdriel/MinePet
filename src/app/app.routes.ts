import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { ConsultationsComponent } from './pages/layout/Dashboard/pages/Consultations/Consultations.component';
import { PrescriptionsComponent } from './pages/layout/Dashboard/pages/Prescriptions/Prescriptions.component';
import { HistoryComponent } from './pages/layout/Dashboard/pages/History/History.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  {
    path: 'auth/login',
    loadComponent: () =>
      import('./features/auth/login/login/login.component').then((m) => m.LoginComponent),
  },


  {
    path: 'auth/register',
    loadComponent: () =>
      import('./features/auth/register/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },

  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'consultas', pathMatch: 'full' },
      { path: 'consultas', component: ConsultationsComponent },
      { path: 'recetas', component: PrescriptionsComponent },
      { path: 'historial', component:HistoryComponent},
    ],
  },

  { path: '**', redirectTo: 'auth/login' },
];

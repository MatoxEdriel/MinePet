import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { ConsultationsComponent } from './pages/layout/Dashboard/pages/Consultations/Consultations.component';
import { PrescriptionsComponent } from './pages/layout/Dashboard/pages/Prescriptions/Prescriptions.component';
import { HistoryComponent } from './pages/layout/Dashboard/pages/History/History.component';
import { authGuardGuard } from './guards/auth-guard-guard';
import { UserProfileComponent } from './pages/layout/nav/user-profile/user-profile/user-profile.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  // {
  //   path: 'auth/login',
  //   loadComponent: () =>
  //     import('./features/auth/login/login/login.component').then((m) => m.LoginComponent),
  // },

    {
    path: 'auth/login',
    loadComponent: () =>
      import('./features/auth/AuthcontainerComponent/MainLogin.component').then((m) => m.MainLoginComponent),
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
    canActivateChild: [authGuardGuard],
    children: [
      { path: '', redirectTo: 'consultas', pathMatch: 'full' },
      { path: 'consultas', component: ConsultationsComponent },
      { path: 'recetas', component: PrescriptionsComponent },
      { path: 'historial', component:HistoryComponent},
      { path: 'perfil' , component: UserProfileComponent}
    ]
  },

  { path: '**', redirectTo: 'auth/login' },
];

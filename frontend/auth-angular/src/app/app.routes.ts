import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'home', redirectTo: '' },
  { path: 'login', component: LoginComponent }
];

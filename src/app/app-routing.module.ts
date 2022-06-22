import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    component: LoginComponent
  },
  {
    pathMatch: 'full',
    path: 'login',
    component: LoginComponent
  },
  {
    pathMatch: 'full',
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

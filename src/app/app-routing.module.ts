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
  },
  {
    path: "alumnos",
    loadChildren: () =>import("./alumnos/alumnos.module").then(m => m.AlumnosModule)
  },
  {
    path: "clases",
    loadChildren: () =>import("./clases/clases.module").then(m => m.ClasesModule)
  },
  {
    path: "cursos",
    loadChildren: () =>import("./cursos/cursos.module").then(m => m.CursosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

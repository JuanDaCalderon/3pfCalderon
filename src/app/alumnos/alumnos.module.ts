import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { NameOutputPipe } from '../pipes/name-output.pipe';

import { AlumnosRoutingModule } from './alumnos-routing.module';

import { AlumnosComponent } from './alumnos.component';
import { AddAlumnoModalComponent } from './add-alumno-modal/add-alumno-modal.component';
import { DeleteAlumnoModalComponent } from './delete-alumno-modal/delete-alumno-modal.component';
import { EditAlumnoModalComponent } from './edit-alumno-modal/edit-alumno-modal.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    NameOutputPipe,
    AlumnosComponent,
    AddAlumnoModalComponent,
    EditAlumnoModalComponent,
    DeleteAlumnoModalComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    AlumnosRoutingModule
  ]
})
export class AlumnosModule { }
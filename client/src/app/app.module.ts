import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { CursoFormComponent } from './components/curso-form/curso-form.component';
import { HorarioFormComponent } from './components/horario-form/horario-form.component';
import { SeccionFormComponent } from './components/seccion-form/seccion-form.component';
import { AsignacionFormComponent } from './components/asignacion-form/asignacion-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { CursoListComponent } from './components/curso-list/curso-list.component';
import { HorarioListComponent } from './components/horario-list/horario-list.component';
import { SeccionesListComponent } from './components/secciones-list/secciones-list.component';
import { AsignacionesListComponent } from './components/asignaciones-list/asignaciones-list.component';
import { NavigationStudentComponent } from './components/navigation-student/navigation-student.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserFormComponent,
    CursoFormComponent,
    HorarioFormComponent,
    SeccionFormComponent,
    AsignacionFormComponent,
    UserListComponent,
    CursoListComponent,
    HorarioListComponent,
    SeccionesListComponent,
    AsignacionesListComponent,
    NavigationStudentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

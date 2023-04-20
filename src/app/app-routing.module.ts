import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointComponent } from './components/add-appoint/add-appoint.component';
import { AppointmentsListComponent } from './components/appointments-list/appointments-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DoctorDashBoardComponent } from './components/doctor-dash-board/doctor-dash-board.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorViewComponent } from './components/doctor-view/doctor-view.component';
import { LoginComponent } from './components/login/login.component';
import { ObserComponent } from './components/obser/obser.component';
import { SignComponent } from './components/sign/sign.component';
import { AuthenticationGuard } from './authentication.guard';
const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignComponent},
  {path:'dashboard',canActivate:[AuthenticationGuard],component:DashboardComponent,
  children:[
    {path:'doctorsList',component:DoctorListComponent},
    {path:'appointments',component:AppointmentsListComponent},
    {path:'PatientList',component:DoctorDashBoardComponent},
  {path:'doctor-view/:id',component:DoctorViewComponent}]},
  {path:'appointment',component:AppointmentsListComponent},
  {path:'addAppointment',component:AddAppointComponent},
  {path:'obser',component:ObserComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

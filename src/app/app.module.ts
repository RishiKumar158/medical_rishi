import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LoginComponent } from './components/login/login.component';
import { SignComponent } from './components/sign/sign.component'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppointmentsListComponent } from './components/appointments-list/appointments-list.component';
import { AddAppointComponent } from './components/add-appoint/add-appoint.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignComponent,
    DashboardComponent,
    AppointmentsListComponent,
    AddAppointComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,MatToolbarModule,MatListModule,MatIconModule,MatMenuModule,FormsModule,
    MatDialogModule,ReactiveFormsModule,BrowserAnimationsModule,MatCardModule,MatCheckboxModule,
    MatSlideToggleModule,MatButtonModule,MatSidenavModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

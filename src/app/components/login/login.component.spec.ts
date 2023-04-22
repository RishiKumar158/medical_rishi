import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  
  let authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
  authServiceSpy.login.and.returnValue(of());

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientTestingModule,MatCardModule,ReactiveFormsModule,  MatSnackBarModule ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should allow user to log in', () => {
    const formData = {
      "email": "something@somewhere.com",
      "password": "8938ndisn@din"
    };
    component.registerForm.setValue(formData);
    component.login();

    expect(authServiceSpy.login).toHaveBeenCalledWith(formData.email, formData.password);
  })

  it('should require valid email', () => {
    component.registerForm.setValue({
      "name": "", 
      "email": "invalidemail", 
      "message": ""
    });

    expect(component.registerForm.valid).toEqual(false);
  });
});

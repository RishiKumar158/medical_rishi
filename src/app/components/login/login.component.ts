import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user/user.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  data: any;
  user: any;

  constructor(
    private formBuilder: FormBuilder,
    //private userService: UserService,
    private _snackBar: MatSnackBar,
    private route: Router,
    private http: HttpClient,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: [''],
      password: ['', Validators.required],
    });

    // this.registerForm = this.formBuilder.group({
    //   email: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,}([._+-][a-zA-Z0-9]{1,})?@[a-zA-Z0-9]{1,10}[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3})?$'),],],
    //   password: ['', [Validators.required, Validators.minLength(6)]],});

    //   this.signUpForm = this.formBuilder.group({
    //     email: [""],
    //     password: [""]
    //   })
  }

  login() {
    if (this.registerForm.valid) {
      this.data = {
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
      };

      this.userService.login().subscribe((res: any) => {
   console.log("respo is:",res);
   
        for (let dat of res) {
          
          if (dat.email == this.data.email && dat.password == this.data.password)
           {
            localStorage.setItem('UserId', dat.id);
            this.route.navigate(['dashboard/doctorsList']);
            this.registerForm.reset();
          } else {
            //alert('user not found');
            this._snackBar.open('login successfull', '', {
              duration: 5000,
              horizontalPosition: 'start',
            });
          }
        }
      });
      this.userService.Doctor_login().subscribe((res: any) => {
        console.log("respo is:",res);
        
             for (let dat of res) {
               
               if (dat.email == this.data.email && dat.password == this.data.password)
                {
                 localStorage.setItem('UserId', dat.id);
                 this.route.navigate(['dashboard/PatientList']);
                 this.registerForm.reset();
               } else {
                 //alert('user not found');
                 this._snackBar.open('login successfull', '', {
                   duration: 5000,
                   horizontalPosition: 'start',
                 });
               }
             }
           });

      console.log(this.registerForm.value);
    } else {
      console.log('fill all the fields');
      this._snackBar.open('fill all the fields properly', '', {
        duration: 5000,
        horizontalPosition: 'start',
      });
    }
  }
}

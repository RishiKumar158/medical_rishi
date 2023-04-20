import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/user/user.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  hide : boolean = true;
  checked = false;
  data:any
  IsDoctor:any
  constructor(private formBuilder: FormBuilder,private user:UserService,private _snackBar:MatSnackBar,private router: Router) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
           
            firstName: ['', [Validators.required,Validators.pattern("^[A-Z]{1}[a-z]{2,}$")]],
           
            email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]{3,}([._+-][a-zA-Z0-9]{1,})?@[a-zA-Z0-9]{1,10}[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3})?$")]],
            password: ['', [Validators.required, Validators.minLength(6)]],
           
        },

          
            
        );
      }

      changed($event: MatSlideToggleChange){
        console.log("event state:",$event.checked)
        this.IsDoctor=$event.checked;
        //console.log("toogle state:",this.checked)
      }
     
      register()
      {
        if(this.registerForm.valid){
          this.data = {
            firstName : this.registerForm.value.firstName,
           
            email: this.registerForm.value.email,
            password: this.registerForm.value.password,
            //service:'advance'
          }
          if(this.IsDoctor==true)
          {
            this.user.Doctor_registration(this.data).subscribe((response:any)=>{
              console.log("Register cli successful", response); 

              this.router.navigate(["login"])
              })
          }
          else{
            this.user.registration(this.data).subscribe((response:any)=>{
              console.log("Register cli successful", response); 

              this.router.navigate(["login"])
              })
          }  
       //);
        console.log("reg called:",this.registerForm.value);
        
        }
        else{
          console.log("fill all the fields");
           this._snackBar.open("fill all the fields properly",'',{duration:5000, horizontalPosition: 'start'});
          
        }

      
      }

   
}

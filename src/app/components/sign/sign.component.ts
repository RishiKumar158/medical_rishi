import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  hide : boolean = true;
  constructor(private formBuilder: FormBuilder,private _snackBar:MatSnackBar) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
           
            firstName: ['', [Validators.required,Validators.pattern("^[A-Z]{1}[a-z]{2,}$")]],
           
            email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]{3,}([._+-][a-zA-Z0-9]{1,})?@[a-zA-Z0-9]{1,10}[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3})?$")]],
            password: ['', [Validators.required, Validators.minLength(6)]],
           
        },

          
            
        );
      }
     
      register()
      {
        if(this.registerForm.valid){
          let data = {
            firstName : this.registerForm.value.firstName,
           
            email: this.registerForm.value.email,
            password: this.registerForm.value.password,
            service:'advance'
          }
          
          // this.userService.registration(data).subscribe((response:any)=>{
          //     console.log("Register cli successful", response); 
          //     this._snackBar.open("Registration Successfull",'',{duration:5000,horizontalPosition: 'start'});},
              
       //);
        console.log("reg called:",this.registerForm.value);
        
        }
        else{
          console.log("fill all the fields");
           this._snackBar.open("fill all the fields properly",'',{duration:5000, horizontalPosition: 'start'});
          
        }
      }

      ShowPassword(){
        this.hide = !this.hide;            
    }
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user/user.service';
@Component({
  selector: 'app-obser',
  templateUrl: './obser.component.html',
  styleUrls: ['./obser.component.scss']
})
export class ObserComponent {
  registerForm!: FormGroup;
  number:any
  name:any
  
  constructor(
    private formBuilder: FormBuilder,
    //private userService: UserService,
    private _snackBar: MatSnackBar,
    private route: Router,
    
    private userService: UserService
  ) {}
  obs = new Observable(observer => {
    console.log('Observable starts');

    setTimeout(() => {
      observer.next('1');
    }, 1000);
    setTimeout(() => {
      observer.next('2');
    }, 2000);
    setTimeout(() => {
      observer.next('3');
    }, 3000);
    setTimeout(() => {
      observer.next('4');
    }, 4000);
    setTimeout(() => {
      observer.next('5');
    }, 7000);
    setTimeout(() => {
      observer.next('Anurag');
    }, 10000);
    
  });

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
     
    });
  
  }

  submit(msg:any){
    this.name=msg
    this.obs.subscribe(
      val => {
        console.log(val);
        this.number=val;
      }, //next callback
      error => {
        console.log('error');
      }, //error callback
      () => {
        console.log('Completed');
      } //complete callback
    );
  
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-appoint',
  templateUrl: './add-appoint.component.html',
  styleUrls: ['./add-appoint.component.scss']
})
export class AddAppointComponent implements OnInit {
  registerForm!: FormGroup;
  reqData:any
  constructor(
    private user: UserService,
    private formBuilder: FormBuilder,
    private router:Router,
    public dialogRef: MatDialogRef<AddAppointComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    //console.log(this.data.name)
    this.registerForm = this.formBuilder.group({
           
      name: ['', Validators.required],
     
      
      email: ['', Validators.required],
      date: ['', Validators.required],
     
      from: ['', Validators.required],
      to: ['', Validators.required],
      number: ['', Validators.required],
     
      Injury: ['', Validators.required],
     
     
  },);

  }

 

  closeDialog() {
    if(this.registerForm.valid){
      this.reqData = {
        Patient_name : this.registerForm.value.name,
        Doctor_image: this.data.image,
        Doctor_name: this.data.name,
        Patient_mail: this.registerForm.value.email,
        Patient_date: this.registerForm.value.date,
        Patient_fromTime: this.registerForm.value.from,
        Patient_toTime: this.registerForm.value.to,
        Patient_number: this.registerForm.value.number,
        Patient_Injury: this.registerForm.value.Injury,

        //service:'advance'
      }
   
    console.log("request appoint data:",this.reqData);
    this.user.addAppointment(this.reqData).subscribe((response: any) => {
      console.log('update response', response);
    });
    this.dialogRef.close();
   this.router.navigate(["appointment"]);
    }
}
}

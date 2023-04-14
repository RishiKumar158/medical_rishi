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
  name:any
  docname:any
  idd:any
  mail:any
  date:any
  fromTime:any
  toTime:any
  number:any
  injury:any
  constructor(
    private user: UserService,
    private formBuilder: FormBuilder,
    private router:Router,
    public dialogRef: MatDialogRef<AddAppointComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.name = data.Patient_name;
    this.docname = data.Doctor_name;
    this.idd = data.id;
    this.mail=data.Patient_mail;
    this.date=data.Patient_date;
    this.fromTime=data.Patient_fromTime;
    this.toTime=data.Patient_toTime;
    this.number=data.Patient_number
    this.injury=data.Patient_Injury

    // "Patient_name": "Ravi ",
    //   "Doctor_image": "../../../assets/doctor5.jpg",
    //   "Doctor_name": "Dr. Vijay",
    //   "Patient_mail": "praveensiddhardh8@gmail.com",
    //   "Patient_date": "1995-11-22",
    //   "Patient_fromTime": "10:30",
    //   "Patient_toTime": "11:30",
    //   "Patient_number": 9989455678,
    //   "Patient_Injury": "fever",
    //   "id": 9
  }

  ngOnInit(): void {
    //console.log(this.data.name)
console.log(this.docname)
    
    this.registerForm = this.formBuilder.group({
           
      name: ['', Validators.required],
      docname: ['', Validators.required],
      
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
   this.router.navigate(["dashboard/appointments"]);
    }
}
}

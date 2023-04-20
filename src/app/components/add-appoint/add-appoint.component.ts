import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user/user.service';
import { Router } from '@angular/router';
import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
@Component({
  selector: 'app-add-appoint',
  templateUrl: './add-appoint.component.html',
  styleUrls: ['./add-appoint.component.scss'],
})
export class AddAppointComponent implements OnInit {
  registerForm!: FormGroup;
  newReg:boolean=false
  Patient_img: string = '';

  //../../../assets/Ellipse1.png

  reqData: any;
  name: any;
  docname: any;
  idd: any;
  mail: any;
  date: any;
  fromTime: any;
  toTime: any;
  number: any;
  injury: any;
  updateId: any;
  docimage: any;
  pmage: any;
  address:any;
  age:any;
  isUpdated: boolean = true;
  my:any
  constructor(
    private user: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    public dialogRef: MatDialogRef<AddAppointComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.name = data.Patient_name;
    this.docname = data.Doctor_name;
    this.idd = data.id;
    this.docimage = data.Doctor_image;
    this.mail = data.Patient_mail;
    this.date = data.Patient_date;
    this.fromTime = data.Patient_fromTime;
    this.toTime = data.Patient_toTime;
    this.number = data.Patient_number;
    this.injury = data.Patient_Injury;
    this.pmage = data.Patient_img;
    this.address=data.Patient_address;
    this.age=data.Patient_age
  }

  ngOnInit(): void {
    // this.my=this.router.url;
    // console.log("presnt url",this.my);
    if(this.router.url=="/dashboard/doctorsList")
    {
      this.newReg = true;
    }
    else{
      this.newReg = false;
    }
 

    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      docname: ['', Validators.required],

      email: ['', Validators.required],
      date: ['', Validators.required],

      from: ['', Validators.required],
      to: ['', Validators.required],
      number: ['', Validators.required],

      Injury: ['', Validators.required],

      address: ['', Validators.required],

      age: ['', Validators.required]

      //P_image:['', Validators.required]
    });
    this.Patient_img = this.data.Patient_img;
  }

  ImageSwapper(loc: string) {
    this.Patient_img = loc;
  }

  //  save()
  //  {
  //   if(this.registerForm.valid){

  //   }
  //   else{
  //     this.close()
  //   }
  //  }
  closy()
  {
    this.dialogRef.close();
  }
  closeDialog() {
    if (this.registerForm.valid) {
      this.reqData = {
        Patient_name: this.registerForm.value.name,
        Doctor_image: this.data.image,
        Doctor_name: this.data.Doctor_name,
        Patient_mail: this.registerForm.value.email,
        Patient_date: this.registerForm.value.date,
        Patient_fromTime: this.registerForm.value.from,
        Patient_toTime: this.registerForm.value.to,
        Patient_number: this.registerForm.value.number,
        Patient_address: this.registerForm.value.address,
        Patient_age: this.registerForm.value.age,
        Patient_Injury: this.registerForm.value.Injury,
        Patient_img: this.Patient_img,
        

        //service:'advance'
      };
    }
    console.log('request appoint data:', this.reqData);
    this.user.addAppointment(this.reqData).subscribe((response: any) => {
      console.log('update response', response);
    });
    this.dialogRef.close();
    this.router.navigate(['dashboard/appointments']);
  }

  close() {
    if (this.registerForm.valid) {
      this.reqData = {
        Patient_name: this.name,
        Doctor_name: this.docname,
        Doctor_image: this.docimage,
        id: this.idd,
        Patient_mail: this.mail,
        Patient_date: this.date,
        Patient_fromTime: this.fromTime,
        Patient_toTime: this.toTime,
        Patient_number: this.number,
        Patient_Injury: this.injury,
        Patient_img: this.Patient_img,
        Patient_address: this.address,
        Patient_age: this.age,
        //service:'advance'
      };
    }

    console.log('request appoint data close():', this.reqData);
    this.updateId = this.reqData.id;
    console.log('this is ahh id:', this.updateId);

    this.user
      .putPatient(this.reqData, this.updateId)
      .subscribe((response: any) => {
        console.log('update put response', response);
      });
    this.dialogRef.close();
    //this.router.navigate(["dashboard/appointments"]);
    window.location.reload();
  }



}

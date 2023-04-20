import { Component, OnInit } from '@angular/core';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAppointComponent } from '../add-appoint/add-appoint.component';
import { UserService } from 'src/app/Services/user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {
  token:any
  doctorsData: any
    // {id: 1, image: '../../../assets/doctor4.jpg', Doctor_name: 'Dr. Rohit', specilization: 'Gynaecologist'},

    // {id: 2, image: '../../../assets/doctor5.jpg', Doctor_name: 'Dr. Vijay', specilization: 'Surgeon'},

    // {id: 3, image: '../../../assets/doctor6.jpg', Doctor_name: 'Dr. Lawren', specilization: 'Dentist'},
    
    // {id: 4, image: '../../../assets/d12.jpg', Doctor_name: 'Dr. Swenthrikgz', specilization: 'ENT'},

    // {id: 5, image: '../../../assets/d11.jpg', Doctor_name: 'Dr. Peter', specilization: 'Dermatoligist'},

    // {id: 6, image: '../../../assets/d9.jpg', Doctor_name: 'Dr. Hensikiy', specilization: 'Pediatrist'}

  

  


  
  constructor(private matDialog:MatDialog,private user:UserService,private router:Router)
  {
     this.token=localStorage.getItem("UserId");
    console.log("user id is:",this.token);
  }

  ngOnInit(): void {
   // this.DialogBox(this.doctorsData);
   this.user.getdoctorList().subscribe((res: any) => {
    console.log("respo is:",res);
  this.doctorsData=res;
  })
    
  }
  DoctorView(Doctordata: any){
    this.router.navigateByUrl('/dashboard/doctor-view/' + Doctordata);

  }

  DialogBox(doctor:any): void {
    const dialogRef = this.matDialog.open(AddAppointComponent, {
      height:'800px',
      width:'500px',
      data:doctor,
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
}

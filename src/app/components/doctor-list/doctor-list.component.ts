import { Component, OnInit } from '@angular/core';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAppointComponent } from '../add-appoint/add-appoint.component';
@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {
  token:any
  doctorsData: any = [
    {id: 1, image: '../../../assets/doctor4.jpg', name: 'Dr. Rohit', specilization: 'Gynaecologist'},

    {id: 2, image: '../../../assets/doctor5.jpg', name: 'Dr. Vijay', specilization: 'Surgeon'},

    {id: 3, image: '../../../assets/doctor6.jpg', name: 'Dr. Lawren', specilization: 'Dentist'},
    
    {id: 4, image: '../../../assets/d12.jpg', name: 'Dr. Swenthrikgz', specilization: 'ENT'},

    {id: 5, image: '../../../assets/d11.jpg', name: 'Dr. Peter', specilization: 'Dermatoligist'},

    {id: 6, image: '../../../assets/d9.jpg', name: 'Dr. Hensikiy', specilization: 'Pediatrist'}

  

  ];
  
  constructor(private matDialog:MatDialog)
  {
     this.token=localStorage.getItem("UserId");
    console.log("user id is:",this.token);
  }

  ngOnInit(): void {
    
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

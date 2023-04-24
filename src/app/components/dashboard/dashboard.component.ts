import { Component } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAppointComponent } from '../add-appoint/add-appoint.component';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mobileQuery!: MediaQueryList;
  mm:any
// constructor(private route:Router,private data:DataService){}
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private route:Router,private data:DataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    
  }
  
// token:any
//   doctorsData: any = [
//     {id: 1, image: '../../../assets/doctor4.jpg', name: 'Dr. Rohit', specilization: 'Gynaecologist'},

//     {id: 2, image: '../../../assets/doctor5.jpg', name: 'Dr. Vijay', specilization: 'Surgeon'},

//     {id: 3, image: '../../../assets/doctor6.jpg', name: 'Dr. Lawren', specilization: 'Dentist'},
    
//     {id: 4, image: '../../../assets/d12.jpg', name: 'Dr. Swenthrikgz', specilization: 'ENT'},

//     {id: 5, image: '../../../assets/d11.jpg', name: 'Dr. Peter', specilization: 'Dermatoligist'},

//     {id: 6, image: '../../../assets/d9.jpg', name: 'Dr. Hensikiy', specilization: 'Pediatrist'}

  

//   ];
  
//   constructor(private matDialog:MatDialog)
//   {
//      this.token=localStorage.getItem("UserId");
//     console.log("user id is:",this.token);
//   }

//   ngOnInit(): void {
    
//   }
//   DialogBox(doctor:any): void {
//     const dialogRef = this.matDialog.open(AddAppointComponent, {
//       height:'800px',
//       width:'500px',
//       data:doctor,
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//     });
//   }

logout(){
  
  localStorage.removeItem('UserId')
  this.route.navigate(['/login']);
}

search(msg:any){
  this.mm=msg;
  console.log("this data is:",this.mm);
this.data.outgoingData(this.mm);
} 
  
}

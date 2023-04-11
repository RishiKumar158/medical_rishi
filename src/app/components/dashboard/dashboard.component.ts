import { Component } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAppointComponent } from '../add-appoint/add-appoint.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  constructor(private matDialog:MatDialog)
  {
    let token=localStorage.getItem("userID");
    console.log("user id is:",token);
  }

  ngOnInit(): void {
    
  }
  DialogBox(): void {
    const dialogRef = this.matDialog.open(AddAppointComponent, {
      height:'800px',
      width:'500px',
      data:'',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  
}

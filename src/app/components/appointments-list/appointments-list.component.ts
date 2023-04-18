import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user/user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddAppointComponent } from '../add-appoint/add-appoint.component';
@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.scss']
})
export class AppointmentsListComponent implements OnInit {
  innerHTMLL:any=[]
  resId:any
constructor(private user:UserService, private route: Router,private matDialog:MatDialog){}
  ngOnInit(): void {
    this.user.getAppointList().subscribe((res: any) => {
      console.log("respo is99:",res);
      this.innerHTMLL =res;
    
      })
    }
       
    
    remove(ctl:any) {
        //console.log("to be deleted one is:",ctl);
      this.resId=ctl.id;
      console.log(this.resId);
      
      this.user.deletePatient(this.resId).subscribe((res: any) => {
           console.log("deleted respo is:",res);
           window.location.reload();
           
          })
      
        }

        update(ctl:any)
        {
          
          this.resId=ctl.id;
          console.log("going to updated responce:",ctl);
          console.log("going to updated Id:",this.resId);
          localStorage.setItem("PatientId",this.resId);
   
            const dialogRef = this.matDialog.open(AddAppointComponent, {
              height:'800px',
              width:'500px',
              data:ctl,
            });

           
        }
     
  
}


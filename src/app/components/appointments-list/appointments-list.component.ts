import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.scss']
})
export class AppointmentsListComponent implements OnInit {
  innerHTMLL:any=[]
  resId:any
constructor(private user:UserService, private route: Router){}
  ngOnInit(): void {
    this.user.getAppointList().subscribe((res: any) => {
      console.log("respo is:",res);
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
          //console.log("to be deleted one is:",ctl);
          this.resId=ctl.id;
          console.log(this.resId);
          localStorage.setItem("PatientId",this.resId);
          this.route.navigate(['dashboard/doctorsList']);

        }
     
  
}


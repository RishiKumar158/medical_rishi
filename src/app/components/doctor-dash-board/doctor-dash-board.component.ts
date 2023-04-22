import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user/user.service';
import { DataService } from 'src/app/Services/data.service';
@Component({
  selector: 'app-doctor-dash-board',
  templateUrl: './doctor-dash-board.component.html',
  styleUrls: ['./doctor-dash-board.component.scss']
})
export class DoctorDashBoardComponent implements OnInit {
  innerHTMLL:any
  searchNote:any
  constructor(private user:UserService,private data:DataService)
  {

  }

  ngOnInit(): void {
    this.user.getAppointList().subscribe((res: any) => {
      console.log("respo is99:",res);
      this.innerHTMLL =res;
    
      })

      this.data.incomingData.subscribe((res)=>{
        console.log('Search :',res);
        this.searchNote=res;
        
      })

}
}
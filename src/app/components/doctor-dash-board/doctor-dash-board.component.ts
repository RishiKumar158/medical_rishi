import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user/user.service';
@Component({
  selector: 'app-doctor-dash-board',
  templateUrl: './doctor-dash-board.component.html',
  styleUrls: ['./doctor-dash-board.component.scss']
})
export class DoctorDashBoardComponent implements OnInit {
  innerHTMLL:any
  constructor(private user:UserService)
  {

  }

  ngOnInit(): void {
    this.user.getAppointList().subscribe((res: any) => {
      console.log("respo is99:",res);
      this.innerHTMLL =res;
    
      })

}
}
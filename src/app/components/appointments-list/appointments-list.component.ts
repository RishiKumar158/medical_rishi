import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user/user.service';
@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.scss']
})
export class AppointmentsListComponent implements OnInit {
  innerHTMLL:any=""
constructor(private user:UserService){}
  ngOnInit(): void {
    this.user.getAppointList().subscribe((res: any) => {
      console.log("respo is:",res);
      for (const r of res)
      {
        this.innerHTMLL += `<tr>
                            <td class="profileimgcol"><img src='r.Doctor_image' ></td>
                            <td class="namecol">"r.Patient_name"</td>
                            <td class="deptcol">{{r.Patient_mail}}</td>
                            <td class="deptcol">{{r.Patient_date}}</td>
                            <td class="salarycol">{{r.Patient_fromTime}}+"  "+{{r.Patient_toTime}}</td>
                            <td class="deptcol">{{r.Patient_number}}</td>
                            <td class="deptcol">{{r.Doctor_name}}</td>
                            <td class="deptcol">{{r.Patient_Injury}}</td>
                            <td class="actionscol"><img width="30" height="30" id="{{r.id}}" src="../assets/delete.png" alt="delete" onclick="remove(this)">&nbsp&nbsp
                            <img width="30" height="30" id="{{r.id}}" src="../assets/edit.png" alt="edit" onclick="update(this)"></td>
                            
                            </tr>`;
      }
      
     
      }
  )
}
}

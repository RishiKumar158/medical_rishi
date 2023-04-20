import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user/user.service';
@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.scss']
})
export class DoctorViewComponent implements OnInit{
  id:any

  constructor(private activatedRout:ActivatedRoute, private userService:UserService){}
  
    ngOnInit(): void {
      this.id = this.activatedRout.snapshot.paramMap.get('id');
      console.log(this.id);
      
      this.userService.GetIndividualDoc(this.id).subscribe((datIn) => {
        console.log(datIn);
        
      })
  
    }
  
}

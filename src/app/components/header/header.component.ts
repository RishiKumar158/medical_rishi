import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
mm:any
  constructor(private route:Router,private data:DataService){}
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

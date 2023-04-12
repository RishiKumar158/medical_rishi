import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http/http.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;
  constructor(private httpService : HttpService) {
    //this.token = localStorage.getItem('token');
   }

  registration(reqData : any){
    console.log(reqData)
   let header = {
     headers:new HttpHeaders({
       'Content-type':'application/json',
        //'Authorization':'token'
     })
   }
   return this.httpService.postService('user', reqData, false, header);
 }

 login(){
 // console.log(reqData)
 let header = {
   header:new HttpHeaders({
     'Content-type':'application/json',
     // 'Authorization':'token'
   })
 }
 return this.httpService.getService('user',false, header);
}

getAppointList()
{
  let header = {
    header:new HttpHeaders({
      'Content-type':'application/json',
      // 'Authorization':'token'
    })
  }
  return this.httpService.getService('appointments',false, header);
}

senduserData(reqData:any)
{
  let header = {
    header:new HttpHeaders({
      'Content-type':'application/json',
      // 'Authorization':'token'
    })
  }
  return this.httpService.postService('user', reqData, false, header);

}

addAppointment(reqdata: any) {
  let header = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      //Authorization: this.token,
    }),
  };
  return this.httpService.postService(
    'appointments',
    reqdata,
    true,
    header
  );
}

}

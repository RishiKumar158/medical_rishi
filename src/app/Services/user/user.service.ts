import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http/http.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService : HttpService) { }

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

 login(reqData : any){
  console.log(reqData)
 let header = {
   header:new HttpHeaders({
     'Content-type':'application/json',
     // 'Authorization':'token'
   })
 }
 return this.httpService.getService('user',false, header);
}

}

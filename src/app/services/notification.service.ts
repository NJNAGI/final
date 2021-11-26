import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http:HttpClient) { }

  getnotifications(){
    return this.http.get(`${environment.baseurl}/users/notification/all`)
  }
   getnotificationsh2(){
    return this.http.get(`${environment.baseurl}/users/notificationh2/all`)
  }
 
  addnotification(iddemande:any,notification:any){
    console.log("id user",iddemande)
    return this.http.post(`${environment.baseurl}/users/notification/${iddemande}`,notification)}

    addnotificationH2(iddemande:any,notificationH2:any){
     console.log("id demande",iddemande)
      return this.http.post(`${environment.baseurl}/users/notificationh2/${iddemande}`,notificationH2)}
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceloginService {

  token = localStorage.getItem("token")!
  headersoption = new HttpHeaders({
    "x-access-token": this.token
  })


  constructor(private http: HttpClient) { }
  
  register(idUnite:any,idEtab:any,codeSoc:any,newuser: any) {
    console.log(idEtab)
    console.log(codeSoc)
    console.log(idUnite)
    return this.http.post(`${environment.baseurl}/users/register/${idUnite}/${idEtab}/${codeSoc}`,newuser)
  }

  login(requestLogin: any) {
    return this.http.post(`${environment.baseurl}/users/login`, requestLogin)
  }



  getusers() {
    return this.http.get(`${environment.baseurl}/users/all`)
  }
  getuserById(id: any) {
    return this.http.get(`${environment.baseurl}/users/getone/${id}`)
  }


  deleteuser(id: any) {
    return this.http.delete(`${environment.baseurl}/users/delete/${id}`)
  }

  updateuser(id: any, newuser: any) {
    return this.http.put(`${environment.baseurl}/users/update/${id}`, newuser)
  }
  logout() {
    let refreshtoken = localStorage.getItem("refreshtoken")
    return this.http.post(`${environment.baseurl}/users/logout`, { "refreshToken": refreshtoken },
      { headers: this.headersoption }
    )
  }
}

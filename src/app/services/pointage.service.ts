import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PointageService {

  constructor(private http:HttpClient) { }

  savepointage(iddemande:any,idinterimaire:any,pointage:any){
    console.log("id user",iddemande)
    console.log("id interimaire",idinterimaire)


    return this.http.post(`${environment.baseurl}/users/pointage/save/${iddemande}/${idinterimaire}`,pointage)
  }
  updatepointage(id:any,pointage:any){
    return this.http.put(`${environment.baseurl}/users/pointage/update/${id}`,pointage)
  
  }
  updatecout(Id:any,idprestataire:any){
    return this.http.put(`${environment.baseurl}/users/pointage/updatecout/${Id}/${idprestataire}`,{})
  
  }
  updateetat(Id:any){
    return this.http.put(`${environment.baseurl}/users/pointage/traiter/${Id}`,{})
  
  }
  updateetataffectation(Id:any){
    return this.http.put(`${environment.baseurl}/users/affectation/traiter/${Id}`,{})
  
  }
 
  getpointages(){
    return this.http.get(`${environment.baseurl}/users/pointage/all`)
  }
}

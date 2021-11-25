import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicedemandeService {

  constructor(private http:HttpClient) { }

  getdemandes(){
    return this.http.get(`${environment.baseurl}/users/demands/all`)
  }
 
  adddemande(idUser:any,idEtab:any,codeSoc:any,demande:any){
    console.log("id user",idUser)
    console.log("id etablissement",idEtab)
    console.log("codesoc",codeSoc)


    return this.http.post(`${environment.baseurl}/users/demands/add/${idUser}/${idEtab}/${codeSoc}`,demande)}

 deletedemande(id:any){
      return this.http.delete(`${environment.baseurl}/users/demands/delete/${id}`)}

updatedemande(id:any,newdemande:any){
  return this.http.put(`${environment.baseurl}/users/demands/update/${id}`,newdemande)
}
getdemandeById(id:any){
  return this.http.get(`${environment.baseurl}/users/demands/GetOne/${id}`)
}
donneravisH1(id:any,avis:any){
  return this.http.put(`${environment.baseurl}/users/demands/donneravisH1/${id}`,avis)
}
donneravisH2(id:any,avis:any){
  return this.http.put(`${environment.baseurl}/users/demands/donneravisH2/${id}`,avis)
}
getheurereel(id:any){
  return this.http.put(`${environment.baseurl}/users/demands/nb/${id}`,{})
}
getheurereel1(id:any,idprestataire:any){
  return this.http.put(`${environment.baseurl}/users/demands/nbj/${id}/${idprestataire}`,{})
}
}

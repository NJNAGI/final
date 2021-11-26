import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceetablissementsService {

  constructor(private http:HttpClient) { }

  getetablissements(){
    return this.http.get(`${environment.baseurl}/users/etablisements/all`)
  }
  getsociete(){
    return this.http.get(`${environment.baseurl}/users/societes/all`)
  }
  addetab(etab:any,codeSoc:any){

    return this.http.post(`${environment.baseurl}/users/etablisements/add/${codeSoc}`,etab)}

 deleteetab(id:any){
      return this.http.delete(`${environment.baseurl}/users/etablisements/delete/${id}`)}

updatetab(id:any,newetab:any){
  return this.http.put(`${environment.baseurl}/users/etablisements/update/${id}`,newetab)
}
}

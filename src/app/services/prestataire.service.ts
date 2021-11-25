import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrestataireService {
  constructor(private http:HttpClient) { }

  getprestataire(){
    return this.http.get(`${environment.baseurl}/users/prestataire/all`)
  }
  addprestataire(prestataire:any){
    return this.http.post(`${environment.baseurl}/users/prestataire/save`,prestataire)
  }
  addprestataire1(idcout:any,idsoc:any,prestataire:any){
    console.log(idcout)
    return this.http.post(`${environment.baseurl}/users/prestataire/save1/${idcout}/${idsoc}`,prestataire)
  }
  getcout(){
    return this.http.get(`${environment.baseurl}/users/cout/all`)
  }
  getinterimaire(){
    return this.http.get(`${environment.baseurl}/users/interimaire/all`)
  }

  addinterimaire(idprestataire:any,interimaire:any){
    return this.http.post(`${environment.baseurl}/users/interimaire/saveinterimmaire/${idprestataire}`,interimaire)
  }
  
  addaffectation(iddemande:any,idinterimaire:any,affectation:any){
    console.log("id demande",iddemande)
    console.log("id interimaire",idinterimaire)
    return this.http.post(`${environment.baseurl}/users/affectation/save/${iddemande}/${idinterimaire}`,affectation)}


addheure(idinterimaire:any,heure:any){
    return this.http.post(`${environment.baseurl}/users/interimaire/saveheure/${idinterimaire}`,heure)}



  getaffectation(){
      return this.http.get(`${environment.baseurl}/users/affectation/all`)
    }
}

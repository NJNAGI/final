import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  constructor(private http:HttpClient) { }

  getcommande(){
    return this.http.get(`${environment.baseurl}/users/commande/all`)
  }
  updateetat(Id:any,somme:any){
    return this.http.put(`${environment.baseurl}/users/commande/traiter/${Id}`,somme)
  }
  addcommande(iddemande:any,idprest:any,demande:any){
    console.log("id demande",iddemande)
    console.log("id prestataire",idprest)


    return this.http.post(`${environment.baseurl}/users/commande/save/${iddemande}/${idprest}`,demande)}

    updatecout(Id:any,idprestataire:any){
      return this.http.put(`${environment.baseurl}/users/commande/updatecout/${Id}/${idprestataire}`,{})
    
    }
    getcommandeById(id:any){
      return this.http.get(`${environment.baseurl}/users/commande/GetOne/${id}`)
    }
//  deleteetab(id:any){
//       return this.http.delete(`${environment.baseurl}/users/etablisements/delete/${id}`)}

// updatetab(id:any,newetab:any){
//   return this.http.put(`${environment.baseurl}/users/etablisements/update/${id}`,newetab)
// }
}

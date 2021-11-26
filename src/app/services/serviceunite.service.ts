import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceuniteService {

  constructor(private http:HttpClient) { }

  getunite(){
    return this.http.get(`${environment.baseurl}/users/uniteOrg/all`)
  }
  getuser(){
    return this.http.get(`${environment.baseurl}/users/all`)
  }
 
//   addetab(etab:any,codeSoc:any){

//     return this.http.post(`${environment.baseurl}/users/etablisements/add/${codeSoc}`,etab)}

//  deleteetab(id:any){
//       return this.http.delete(`${environment.baseurl}/users/etablisements/delete/${id}`)}

// updatetab(id:any,newetab:any){
//   return this.http.put(`${environment.baseurl}/users/etablisements/update/${id}`,newetab)
// }
}

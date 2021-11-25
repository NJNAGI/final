import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http:HttpClient) { }

  getbudget(){
    return this.http.get(`${environment.baseurl}/users/budget/all`)
  }
  addbudget(budget:any){
    return this.http.post(`${environment.baseurl}/users/budget/save`,budget)
  }
}

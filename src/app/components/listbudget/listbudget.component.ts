import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-listbudget',
  templateUrl: './listbudget.component.html',
  styleUrls: ['./listbudget.component.css']
})
export class ListbudgetComponent implements OnInit {

  listbudget:any
  submitted=false
  p:number=1
  constructor(private api:BudgetService) { }

  ngOnInit(): void {
    this.getallbudget()
  
  }
  getallbudget(){
    this.api.getbudget().subscribe((res:any)=>{
      this.listbudget=res
      console.log("reponse",res)
    })
  }


}

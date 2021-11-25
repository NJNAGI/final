import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)
  constructor() { }

  ngOnInit(): void {
    console.log('is H1',this.isH1())
    console.log('is H2',this.isH2())
    console.log('is grh',this.isgrh())
    console.log('is demandeur',this.isdemandeur())



  }
  isdemandeur(){
    return this.userconnect.niveau_hierarchique==="demandeur"? true :false
  }
  
  isH1(){
    return this.userconnect.niveau_hierarchique==="H1"? true :false
  }

  isH2(){
    return this.userconnect.niveau_hierarchique==="H2" ? true :false
  } 
  isgrh(){
    return this.userconnect.niveau_hierarchique==="grh" ? true :false
  }

}

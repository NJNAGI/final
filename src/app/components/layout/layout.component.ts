import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';
import { PrestataireService } from 'src/app/services/prestataire.service';
import { ServicedemandeService } from 'src/app/services/servicedemande.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  listdemandes:any
  listcomd:any
  listinterimaire:any
  listprestataire:any
  liste:any
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)
  constructor(private apidemande:ServicedemandeService,private commandeservice:CommandeService,
    private interimaireservice:PrestataireService) { }

  ngOnInit(): void {
    this.getAlldemandes()
    this.getallcommande()
    this.getallinterimaire()
    this.getallprestataire()
    this.getAlldemandes1()
  }
  getAlldemandes(){
    this.apidemande.getdemandes().subscribe((res:any)=>{
      this.listdemandes=res
      console.log("reponse",res)
    console.log("nnnnnnnnnnnnnnnnnnnnnnnn",this.listdemandes.length)

    })
  }
  getAlldemandes1(){
    this.apidemande.getdemandes().subscribe((res:any)=>{
      this.liste=res.filter((el:any)=>el.demandeur==this.userconnect.username)
      console.log("liste1",this.liste)
      console.log("lengthhhhhhhh",this.liste.length)
    })
  }

  getallcommande(){
    this.commandeservice.getcommande().subscribe((res:any)=>{
      this.listcomd=res
      console.log("commande",res)
    })
  }
  getallinterimaire(){
    this.interimaireservice.getinterimaire().subscribe((res:any)=>{
      this.listinterimaire=res
      console.log("interimaire",res)
    })
  }
  getallprestataire(){
    this.interimaireservice.getprestataire().subscribe((res:any)=>{
      this.listprestataire=res
      console.log("prestataire",res)
    })
  }
  isdemandeur(){
    return this.userconnect.niveau_hierarchique==="demandeur"? true :false
  }
  isgrh(){
    return this.userconnect.niveau_hierarchique==="grh" ? true :false
  }
}

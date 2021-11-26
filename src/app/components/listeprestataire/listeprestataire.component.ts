import { Component, OnInit } from '@angular/core';
import { PrestataireService } from 'src/app/services/prestataire.service';

@Component({
  selector: 'app-listeprestataire',
  templateUrl: './listeprestataire.component.html',
  styleUrls: ['./listeprestataire.component.css']
})
export class ListeprestataireComponent implements OnInit {

  listprestataire:any
  submitted=false
  p:number=1
  constructor(private api:PrestataireService) { }

  ngOnInit(): void {
    this.getAllinterimaires()
  
  }
  getAllinterimaires(){
    this.api.getprestataire().subscribe((res:any)=>{
      this.listprestataire=res
      console.log("reponse",res)
    })
  }


}

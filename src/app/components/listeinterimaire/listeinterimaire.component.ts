import { Component, OnInit } from '@angular/core';
import { PrestataireService } from 'src/app/services/prestataire.service';

@Component({
  selector: 'app-listeinterimaire',
  templateUrl: './listeinterimaire.component.html',
  styleUrls: ['./listeinterimaire.component.css']
})
export class ListeinterimaireComponent implements OnInit {

  listinterimaire:any
  submitted=false
  p:number=1
  constructor(private api:PrestataireService) { }

  ngOnInit(): void {
    this.getAllinterimaires()
  
  }
  getAllinterimaires(){
    this.api.getinterimaire().subscribe((res:any)=>{
      this.listinterimaire=res
      console.log("reponse",res)
    })
  }

}

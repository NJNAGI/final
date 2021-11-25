import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicedemandeService } from 'src/app/services/servicedemande.service';

@Component({
  selector: 'app-liste-h1',
  templateUrl: './liste-h1.component.html',
  styleUrls: ['./liste-h1.component.css']
})
export class ListeH1Component implements OnInit {

  listdemandes:any
  demandeForm: FormGroup;
  submitted=false
  p:number=1
  constructor(private formBuilder: FormBuilder,private apidata:ServicedemandeService) { }

  ngOnInit(): void {
    this.getAlldemandes()
    this.demandeForm = this.formBuilder.group({
      id: ['', Validators.required],
      reference: ['', Validators.required],
      date_creation: ['', Validators.required],
      poste: ['', Validators.required],
      demandeur: ['', Validators.required],
      effectifdemande: ['', Validators.required],
      profil: ['', Validators.required],
      sexe: ['', Validators.required],
      natureDedemande: ['', Validators.required],
      motif: ['', Validators.required],
      observationMotif: ['', Validators.required],
      natureDeMission: ['', Validators.required],
      regimeHoraire: ['', Validators.required],
      DebutDeLaMission: ['', Validators.required],
      FinDeLaMission: ['', Validators.required],
      personneAcontacter: ['', Validators.required],
      heureDebut: ['', Validators.required],
      code_societe: ['', Validators.required],
      id_etab: ['', Validators.required],
      avisH1: ['', Validators.required],



     
  });
  }
  getAlldemandes(){
    this.apidata.getdemandes().subscribe((res:any)=>{
      this.listdemandes=res.filter((el:any)=>el.avisH1==null)
      console.log("reponse",res)
    })
  }


 





 
}

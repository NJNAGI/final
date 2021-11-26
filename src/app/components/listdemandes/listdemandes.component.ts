import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
import { ServicedemandeService } from 'src/app/services/servicedemande.service';

@Component({
  selector: 'app-listdemandes',
  templateUrl: './listdemandes.component.html',
  styleUrls: ['./listdemandes.component.css']
})
export class ListdemandesComponent implements OnInit {
  term_search:any=""
  p:number=1
  listdemandes:any
  listnotification:any
  demandeForm: FormGroup;
  submitted=false
  constructor(private formBuilder: FormBuilder,private apidata:ServicedemandeService,private apinotification:NotificationService) { }

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
      avisH2: ['', Validators.required],




     
  });
  }


  
  getAlldemandes(){
    this.apidata.getdemandes().subscribe((res:any)=>{
      this.listdemandes=res
      console.log("reponse",res)
    })
  }
  getAllnotifications(){
    this.apinotification.getnotifications().subscribe((res:any)=>{
      this.listnotification=res
      console.log("reponse",res)
    })
  }


 





 


}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
import { ServicedemandeService } from 'src/app/services/servicedemande.service';
@Component({
  selector: 'app-listedemandeur',
  templateUrl: './listedemandeur.component.html',
  styleUrls: ['./listedemandeur.component.css']
})
export class ListedemandeurComponent implements OnInit {
  term_search:any=""
  p:number=1
  listdemandes:any
  listnotification:any
  demandeForm: FormGroup;
  submitted=false
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)
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
      this.listdemandes=res.filter((el:any)=>el.demandeur==this.userconnect.username)
      console.log("liste de demande par demandeur",this.listdemandes)
    })
  }
  getAllnotifications(){
    this.apinotification.getnotifications().subscribe((res:any)=>{
      this.listnotification=res
      console.log("reponse",res)
    })
  }



}

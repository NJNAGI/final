import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicedemandeService } from 'src/app/services/servicedemande.service';
import { ServiceloginService } from 'src/app/services/servicelogin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-traitement-h1',
  templateUrl: './traitement-h1.component.html',
  styleUrls: ['./traitement-h1.component.css']
})
export class TraitementH1Component implements OnInit {
  demande:any
  id=this.activeroute.snapshot.params.id
  detailForm: FormGroup;
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)
  constructor(private formBuilder: FormBuilder,private apidata:ServicedemandeService, private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getonedemande()
    this.detailForm = this.formBuilder.group({
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
      natureDeMission: ['', Validators.required],
      regimeHoraire: ['', Validators.required],
      DebutDeLaMission: ['', Validators.required],
      FinDeLaMission: ['', Validators.required],
      personneAcontacter: ['', Validators.required],
      heureDebut: ['', Validators.required],
      code_societe: ['', Validators.required],
      id_etab: ['', Validators.required],
      id_unite: ['', Validators.required],
      avisH1: ['', Validators.required],

     
     
  });


  }
  // donneravisH1(){
  //   this.apidata.donneravisH1(this.id,this.detailForm.value.avisH1).subscribe((res:any)=>{
  //     this.demande=res
  //     console.log("avisH1",this.demande)
  //   })
  // } 

  getonedemande(){
    this.apidata.getdemandeById(this.id).subscribe((res:any)=>{
      this.demande=res
      console.log(this.demande)
      this.detailForm.patchValue({
        reference:res.reference,
        date_creation:res.date_creation,
        poste:res.poste,
        demandeur:res.demandeur,
        effectifdemande:res.effectifdemande,
        profil:res.profil,
        sexe:res.sexe,
        motif:res.motif,
        natureDedemande:res.natureDedemande,
        natureDeMission:res.natureDeMission,
        regimeHoraire:res.regimeHoraire,
        DebutDeLaMission:res.debutDeLaMission,
        FinDeLaMission:res.finDeLaMission,
        personneAcontacter:res.personneAcontacter,
        heureDebut:res.heureDebut,
        code_societe:res.societe.code_societe,
        id_unite:this.userconnect.unite.nom,
        id_etab:res.etab.nom,
        avisH1:res.avisH1

        


      })
      console.log("reponse",res)
    })
  }
  onSubmit(){
    this.apidata.donneravisH1(this.id,this.detailForm.value.avisH1).subscribe((res:any)=>{
      Swal.fire(
        'added!',
        'Your Avis has been added To GRH.',
        'success'
      )
      this.demande=res
      console.log("avisH1",this.demande)
    })
  
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicedemandeService } from 'src/app/services/servicedemande.service';

@Component({
  selector: 'app-traitementh2',
  templateUrl: './traitementh2.component.html',
  styleUrls: ['./traitementh2.component.css']
})
export class Traitementh2Component implements OnInit {

  demande:any
  id=this.activeroute.snapshot.params.id
  detailFormh2: FormGroup;
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)
  constructor(private formBuilder: FormBuilder,private apidata:ServicedemandeService, private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getonedemande()
    this.detailFormh2= this.formBuilder.group({
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
     
     
  });
  }
   

  getonedemande(){
    this.apidata.getdemandeById(this.id).subscribe((res:any)=>{
      this.demande=res
      console.log(this.demande)
      this.detailFormh2.patchValue({
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
        id_etab:res.etab.nom

      })
      console.log("reponse",res)
    })
  }


}

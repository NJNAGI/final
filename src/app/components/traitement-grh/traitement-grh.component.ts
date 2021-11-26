import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicedemandeService } from 'src/app/services/servicedemande.service';

@Component({
  selector: 'app-traitement-grh',
  templateUrl: './traitement-grh.component.html',
  styleUrls: ['./traitement-grh.component.css']
})
export class TraitementGRHComponent implements OnInit {
  show_demaande=true
  show_decision=false
  show_commande=false
  show_tableau=false

  show_coor3=false
  demande:any
  id=this.activeroute.snapshot.params.id
  detailFormgrh: FormGroup;
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)
  constructor(private formBuilder: FormBuilder,private apidata:ServicedemandeService, private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getonedemande()
    this.detailFormgrh = this.formBuilder.group({
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
      this.detailFormgrh.patchValue({
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

  showdemande(){
this.show_demaande=true
this.show_decision=false
this.show_commande=false
this.show_tableau=false
  }
  showdecision(){
    this.show_demaande=false
    this.show_decision=true
    this.show_commande=false
    this.show_tableau=false
      }
  showcommande(){
        this.show_demaande=false
        this.show_decision=false
        this.show_commande=true
        this.show_tableau=false
          }
          showtableau(){
            this.show_demaande=false
            this.show_decision=false
            this.show_commande=false
            this.show_tableau=true
              }
}

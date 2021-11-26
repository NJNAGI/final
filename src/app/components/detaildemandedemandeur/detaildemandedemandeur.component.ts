import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeService } from 'src/app/services/commande.service';
import { PrestataireService } from 'src/app/services/prestataire.service';
import { ServicedemandeService } from 'src/app/services/servicedemande.service';
import Swal from 'sweetalert2';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Route } from '@angular/compiler/src/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-detaildemandedemandeur',
  templateUrl: './detaildemandedemandeur.component.html',
  styleUrls: ['./detaildemandedemandeur.component.css']
})
export class DetaildemandedemandeurComponent implements OnInit {

  demande:any
  data:any
  id=this.activeroute.snapshot.params.id
  detailForm: FormGroup;
  commandeForm:FormGroup;
  NotificationForm:FormGroup;
  interimaireForm:FormGroup;
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)
  show_decision=false
  show_commande=false
  show_tableau=false
  show_demaande=true
  show_coor3=false
  listprestataire:any
  listinterimaire:any
  closeResult = '';
  constructor(private formBuilder: FormBuilder,private apidata:ServicedemandeService, private activeroute:ActivatedRoute
    ,private apicommande:CommandeService,private apiprestataire:PrestataireService,private modalService: NgbModal,private route:Router,private notifciation:NotificationService) { }

  ngOnInit(): void {
    this.getonedemande()
    this.getAllprestataire()
    this.getAllinterimaire()
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
      avisH2: ['', Validators.required],
      prestataire: ['', Validators.required],


     
  });
  this.commandeForm = this.formBuilder.group({
    id: ['', Validators.required],
    mois: ['', Validators.required],
    heuretheorique: ['', Validators.required],
    heurereel: ['', Validators.required],
    depensetheorique: ['', Validators.required],
    depensereel: ['', Validators.required],
    annee: ['', Validators.required],

  });
  this.interimaireForm=this.formBuilder.group({
    id: ['', Validators.required],
    titre: ['', Validators.required],
    date_affectation: ['', Validators.required],
    date_fin_mission: ['', Validators.required],
    heure: ['', Validators.required],
    interimaire: ['', Validators.required],


  })
this.NotificationForm=this.formBuilder.group({

})
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
        avisH1:res.avisH1,
        avisH2:res.avisH2,
        id:res.id
      })
      console.log("reponse",res)
    })
   
  }

  getAllprestataire(){
    this.apiprestataire.getprestataire().subscribe((res:any)=>{
      this.listprestataire=res
      console.log("reponse",res)
    })
  }
  getAllinterimaire(){
    this.apiprestataire.getinterimaire().subscribe((res:any)=>{
      this.listinterimaire=res
      console.log("reponse",res)
    })
  }
saveinterimaire(){
  this.data={    
  id: this.interimaireForm.value.id,
  titre: this.interimaireForm.value.titre,
  date_affectation:this.interimaireForm.value.date_affectation,
  date_fin_mission:this.interimaireForm.value.date_fin_mission}

  console.log("interimaire",this.interimaireForm.value.interimaire)
  this.apiprestataire.addaffectation(this.id,this.interimaireForm.value.interimaire,
    this.data).subscribe((res:any)=>{
      Swal.fire({
        icon:'success',
        title:'affectation saved',
        text:'demande found ',
        footer:'prestataire found'
      })
      console.log("rep",res)
    })
}
  savecommande(){
    console.log("prestataire",this.detailForm.value.prestataire)
    this.apicommande.addcommande(this.id,this.detailForm.value.prestataire,
      this.commandeForm.value).subscribe((res:any)=>{
        Swal.fire({
          icon:'success',
          title:'commande saved',
          text:'demande found ',
          footer:'prestataire found'
        })
        console.log("rep",res)
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


 open(content:any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
 this.closeResult = `Closed with: ${result}`;
}, (reason) => {
 this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
 });
}
                
private getDismissReason(reason: any): string {
 if (reason === ModalDismissReasons.ESC) {
return 'by pressing ESC';
 } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
 return 'by clicking on a backdrop';
 } else {
 return `with: ${reason}`;
 }
}

addnotification(){
  this.notifciation.addnotificationH2(this.id,this.NotificationForm.value).subscribe((res:any)=>{
    Swal.fire(
      'added!',
      'Your demande has been added to H2.',
      'success'
    )
    console.log("notification",res)
})

}
getheuretheorique(){
  console.log(this.detailForm.value.prestataire)
  this.apidata.getheurereel(this.id).subscribe((res:any)=>{
    console.log("calcul heure theorique",res)
    this.commandeForm.patchValue(

    {  heuretheorique:res.nbrehtheorique,
      heurereel:res.nbrehtheorique ,
    }
    )

})}

getheuretheorique1(){
  this.apidata.getheurereel1(this.id,this.detailForm.value.prestataire).subscribe((res:any)=>{
    console.log("ppppppppppppppppppppp",res)
    this.commandeForm.patchValue(

    {  depensetheorique:res.depensetheorique,
       depensereel:res.depensetheorique

    }
    )

})}

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicedemandeService } from 'src/app/services/servicedemande.service';
import { ServiceetablissementsService } from 'src/app/services/serviceetablissements.service';
import { ServiceuniteService } from 'src/app/services/serviceunite.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  show_coor1=true
  show_coor2=false
  show_coor3=false
  validate_date=false
  demandeForm: FormGroup;
  submitted = false;
  listetab:any
  listunite:any
  user="2"
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)
  codesoc="3"
  myDate = new Date();
  constructor(private formBuilder: FormBuilder,private route:Router, private apidata:ServicedemandeService,
    private apidata1:ServiceetablissementsService,
    private apidata2:ServiceuniteService,private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.getAlletab()
    this.getAllunite()
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

    },
     {validator: this.dateLessThan('DebutDeLaMission', 'FinDeLaMission')});
     this.demandeForm.patchValue({
     reference:new Date().toISOString().split('T')[0].toString()+"-0000-" +"1"+ Math.random().toString().substr(2,3),
     date_creation:new Date().toISOString().split('T')[0].toString(),
     demandeur:this.userconnect.username
     })

  }
  myFunction(){
    this.demandeForm.value.date_creation=new Date();
    let latest_date =this.datePipe.transform( this.demandeForm.value.date_creation, 'yyyy-MM-dd');
    // {{date  | date:'yyyy-MM-dd'}}
    }

  dateLessThan(from: string, to: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let f = group.controls[from];
      let t = group.controls[to];
      if (f.value > t.value) {
        return {
          dates: "Date from should be less than Date to"
        };
      }
      return {};
      
    }
}


  getAlletab(){
    this.apidata1.getetablissements().subscribe((res:any)=>{
      this.listetab=res
      console.log("reponse",res)
    })
  }


  getAllunite(){
    this.apidata2.getunite().subscribe((res:any)=>{
      this.listunite=res
      console.log("reponse",res)
    })
  }

  onSubmit() {
    this.submitted = true;
    // if (this.demandeForm.invalid) {
    //   console.log('invaliiiid')
    //     return;
    // }
    this.apidata.adddemande(
      this.userconnect.id,
      this.userconnect.etab.id,
      this.userconnect.societe.id,
      this.demandeForm.value).subscribe(res=>{
      Swal.fire(
        'added!',
        'Your demande has been added.',
        'success'
      )
     console.log("demande",res)

      this.route.navigateByUrl('/home/listedemandeur')
     })
   
}
  showcord2(){
    
   this.show_coor2=true
   this.show_coor1=false
   this.show_coor3=false

  }
  showcord3(){
  this.show_coor3=true
  this.show_coor2=false
  this.show_coor1=false


  }
  showcord1(){
    this.show_coor1=true
  this.show_coor2=false
  this.show_coor3=false


    }

}

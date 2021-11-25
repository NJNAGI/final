import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PointageService } from 'src/app/services/pointage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  term_search:any=""
  p:number=1
  listpointage:any
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)

  constructor(private formBuilder: FormBuilder,private route:Router,private apipointage:PointageService) { }

  ngOnInit(): void {
    this.getallpointage()
    // this.affectationForm = this.formBuilder.group({
    //   id: ['', Validators.required],
    //   titre: ['', Validators.required],
    //   date_affectation: ['', Validators.required],
    //   date_fin_mission: ['', Validators.required],
    //   heuretravail: ['', Validators.required],
    //   mois: ['', Validators.required],
    //   annee: ['', Validators.required],
    //   recommander: ['', Validators.required],
    //   tempsattente: ['', Validators.required],
    //   conformiteprofile: ['', Validators.required],



    // })

  }
  // valider(){
  //   Swal.fire(
  //     'Your pointage has been validate.',
  //     'success'
  //   )
  // }


  getallpointage(){
    this.apipointage.getpointages().subscribe((res:any)=>{
      this.listpointage=res.filter((el:any)=>el.etat=='en saisie')
      console.log("reponse",this.listpointage)
    })
  }
  updateetat(id:any){
    // this.listpointage.forEach((el:any) => {
      this.apipointage.updateetat(id).subscribe((res:any)=>{
         console.log("listpointage",res)
      })
      Swal.fire({
        icon:'success',
        title:'etat saved',
      })
      
    // });
    this.apipointage.updateetataffectation(id).subscribe((res:any)=>{
      console.log("list",res)
    })
  }

 

}

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PointageService } from 'src/app/services/pointage.service';
import { PrestataireService } from 'src/app/services/prestataire.service';
import { ServicedemandeService } from 'src/app/services/servicedemande.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pointage',
  templateUrl: './pointage.component.html',
  styleUrls: ['./pointage.component.css']
})
export class PointageComponent implements OnInit {
  listaffectation:any
  listpointage:any
  statusdata:any
p:number=1
listid:any=[]
  affectationForm: FormGroup;
  interimaireForm:FormGroup
  totalheure = 0;
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)

  constructor(private formBuilder: FormBuilder,private route:Router, private apidata:ServicedemandeService,
    private apiprestataire:PrestataireService,private apipointage:PointageService) { }

  ngOnInit(): void {
    this.getallaffectation()
    this.getallpointage()
    this.affectationForm = this.formBuilder.group({
      id: ['', Validators.required],
      titre: ['', Validators.required],
      date_affectation: ['', Validators.required],
      date_fin_mission: ['', Validators.required],
      heuretravail: ['', Validators.required],
      mois: ['', Validators.required],
      annee: ['', Validators.required],
      recommander: ['', Validators.required],
      tempsattente: ['', Validators.required],
      conformiteprofile: ['', Validators.required],
      etat: ['', Validators.required],




    })
    this.interimaireForm = this.formBuilder.group({
      heuretravail: ['', Validators.required],
     




    })
    
    console.log("listeeeee",this.affectationForm.value)

  }
  open(a:any){
    console.log("premier demande",a.d.id)
    console.log("cinnnnnn",a.interimaire.cin)
    console.log("premier interimaire",a.interimaire.id)
    console.log("liste gggg",this.affectationForm.value)
    console.log(a.date_affectation)
    let date = new Date(a.date_affectation); 
    let longMonth = date.toLocaleString('en-us', { month: 'long' }); /* June */
    let longYear = date.getFullYear()
    this.affectationForm.patchValue({mois:longMonth,
    annee:longYear,
    etat:"en saisie",
  })
 
    this.apipointage.savepointage(a.d.id,a.interimaire.id,this.affectationForm.value).subscribe((res:any)=>{
      Swal.fire({
        icon:'success',
        title:'pointage saved',
        text:'demande found ',
        footer:'interimaire found'
      })
      console.log("rep",res)
      console.log("pointage",res)
    
    
  
  })
  }
  saveheure(a:any){
    // this.interimaireForm.patchValue({
    //   heuretravail:Number(this.interimaireForm.value.heuretravail)
    // })
    console.log("heuretravail",this.interimaireForm.value.heuretravail)

    this.apiprestataire.addheure(a.interimaire.id,this.interimaireForm.value.heuretravail).subscribe((res:any)=>{
      console.log("heure",res)
  })
  }
  
  shouldDisable(item:any): boolean {
    return !item.active && this.statusdata.some((status:any) => status.active);
 }
  actionMethod($event: MouseEvent) {
    ($event.target as HTMLButtonElement).disabled = true;
    // Do actions.
}
  getFormatedDate(date: Date, format: string) {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(date, format);
}
  getallaffectation(){
    this.apiprestataire.getaffectation().subscribe((res:any)=>{
   
     

      this.listaffectation=res.filter((el:any)=>el.d.demandeur==this.userconnect.username && el.status=='en cours' )
      
    
    console.log("affectation",this.listaffectation)

    // console.log("affectation id",this.listaffectation.id)


    }
    )
  

  }
  getallpointage(){
    this.apipointage.getpointages().subscribe((res:any)=>{
      this.listpointage=res
      console.log("pointage",this.listpointage)
      this.listpointage.forEach((item: any) => {
        this.listid.push(item.etat)
      });
      console.log("list id pointage", this.listid)

    })
      // this.listpointage.forEach((el:any) => {
      //   console.log("iii",el.id)
      //   this.listid=el.id
      // })
        
      // for (let i = 0; i < this.listpointage.length; i++) {
      //   // this.listid.push(i).id
      //   // this.listid.push(i,'id')
      //   this.listid[i].push[this.listpointage[i].id]
      // }
      // console.log("id",this.listid)
      // el.id!=else.id
    
  }

  priceCount() {
    // this.totalheure = 0;
    //   this.totalheure += Number(element.d.id);
    //   console.log("heure",this.totalheure)
    // });
  }

}

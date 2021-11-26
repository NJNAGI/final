import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PointageService } from 'src/app/services/pointage.service';
import { PrestataireService } from 'src/app/services/prestataire.service';
import { ServiceuniteService } from 'src/app/services/serviceunite.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-traitementpointage',
  templateUrl: './traitementpointage.component.html',
  styleUrls: ['./traitementpointage.component.css']
})
export class TraitementpointageComponent implements OnInit {
  list1:any
  listunite:any
  listuser:any
  listprestataire:any
  listpointage:any
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)
  fileName= 'ExcelSheet.xlsx'; 
  totalheure = 0;
  totalcout2=0;
  totalcout=0;
  prestataire: any;
  listpointagefiltrer:any=[]
  pointageForm:FormGroup
  p:number=1
  // heuretravail=0
  constructor(private formBuilder: FormBuilder,private route:Router,private apiunite:ServiceuniteService
    ,private apiprestataire:PrestataireService,private apipointage:PointageService) { }

  ngOnInit(): void {
    this.pointageForm = this.formBuilder.group({
      id: ['', Validators.required],
      etat: ['', Validators.required],
      moispaiement: ['', Validators.required],
      mois: ['', Validators.required],
      prestataire: ['', Validators.required],
      TotalCout: ['', Validators.required],
      heuretravail: ['', Validators.required]
    })
    
    this.getallprestataire()
    this.getallunite()
    this.getallpointage()
    this.getalluser()
    // this.priceCount()
    // this.getTotal()
 this.changePrice()
  
  }
 


  getallunite(){
    this.apiunite.getunite().subscribe((res:any)=>{
      this.listunite=res
      console.log("unite",res)
    })
  }
  updatecout(){
    console.log("prest", this.pointageForm.value.prestataire)
    this.listpointage.forEach((el:any) => {
      this.apipointage.updatecout(el.id,this.pointageForm.value.prestataire).subscribe((res:any)=>{
        console.log("listpointage",res)
        this.pointageForm.patchValue(

          {  TotalCout:res.totalCout })
      })
      
    });
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
  }
  updatecout2(id:any){
    this.apipointage.updatecout(id,this.pointageForm.value.prestataire).subscribe((res:any)=>{
      // console.log("listpointage",res)
      this.list1=res
      for (var i = 0;i <this.list1.length; i++) {
            // total = Number(this.listpointage[i].totalCout);
            console.log("cttttt",this.list1[i].totalCout);
        }
    })
   
  }

  getallprestataire(){
    this.apiprestataire.getprestataire().subscribe((res:any)=>{
      this.listprestataire=res
      console.log("prestataire",res)
    })
  }

  getallpointage(){
    this.apipointage.getpointages().subscribe((res:any)=>{
      this.listpointage=res
      console.log("pointage",res)
    })
  }
  getalluser(){
    this.apiunite.getuser().subscribe((res:any)=>{
      this.listuser=res
      console.log("listtt of user",res)
    })
  }
  exportexcel (): void 
  { 
     /* l'identifiant de la table est passé ici */    
     let element = document.getElementById('excel-table'); 
     const ws : XLSX.WorkSheet = XLSX.utils.table_to_sheet(element); 

     /* générer le classeur et ajouter la feuille de calcul */ 
     const wb: XLSX.WorkBook = XLSX.utils.book_new(); 
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1'); 

     /* enregistrer dans un fichier */ 
     XLSX.writeFile(wb, this.fileName); 
    
  } 


  // priceCount() {
  //   // this.totalheure = 0;
  //   // this.listpointage.forEach((element:any) => {
  //   //   this.totalheure += Number(element.heuretravail);
  //   //   console.log("hhhhh",element.heuretravail)
  //   //   console.log("heure",this.totalheure)
  //   // });
  //   for (var heuretravail in this.listpointage){
  //     this.totalheure =+ this.listpointage[heuretravail].value;
  //   }
  //   console.log(this.totalheure)
  // }
  getcout() {
    let total = 0;
    for (var i = 0; i < this.listpointage.length; i++) {
        if (this.listpointage[i].totalCout) {
            total = Number(this.listpointage[i].totalCout);
            console.log("totalcout",total)
        }
    }
    return total;
}
 
// getcout(){
//   let totalcout = 0;
//   for (var i = 0; i < this.listprestataire.length; i++) {
//     for (var i = 0; i < this.listpointage.length; i++) {
//       if (this.listprestataire[i].cout.montant) {
//         totalcout = Number(this.listprestataire[i].cout.montant * this.listpointage[i].heuretravail);
//           this.totalcout2 = totalcout;
//           console.log("cout",this.totalcout2)
//       }
//   }
// }
//   return totalcout;
// }
OnChange(event:any){
// console.log("fzfgzrf",this.prestataire)
}
changePrice() {
  console.log('Price change', this.prestataire);
  // let event = this.priceSelection
  // this.apidata.getproducts().subscribe((res:any)=>{
  //   this.listproducts=res["date"]
  //   if (event !== undefined) {
  //     const ListproduitByPrice = this.listproducts.filter((elemt: any) => elemt.prix >= event[0] && elemt.prix <= event[1]);
  //     this.listproducts = ListproduitByPrice;
  //     console.log('filter by price', this.listproducts)
     
  //   }
  // })
}

open(){
  console.log("id pointage",this.pointageForm.value.id)
  this.pointageForm.patchValue({
    etat:"valider",
    moispaiement:this.pointageForm.value.moispaiement})
    // this.apipointage.updatepointage(id,this.pointageForm.value).subscribe((res:any)=>{
      Swal.fire({
        icon:'success',
        title:'pointage saved',
        text:'demande found ',
        footer:'interimaire found'
      })
// })
}

getallpointagefiltrer(){
  this.apipointage.getpointages().subscribe((res:any)=>{
    this.listpointagefiltrer=res.filter((el:any)=>el.interimaire.prestataire.id==this.pointageForm.value.prestataire && el.mois==this.pointageForm.value.mois)
    console.log("listpointagefiltrer",this.listpointagefiltrer)
  })
}
getTotal() {
  let total = 0;
  for (var i = 0; i < this.listpointagefiltrer.length; i++) {
      if (this.listpointagefiltrer[i].interimaire.heuretravail) {
          total += Number(this.listpointagefiltrer[i].interimaire.heuretravail);
          this.totalheure = total;
          console.log("heure",this.totalheure)
          this.totalcout=total*Number(this.listpointagefiltrer[i].interimaire.prestataire.cout.cout)
          console.log("cout",this.totalcout)
          this.pointageForm.patchValue(

            {  TotalCout:this.totalcout })
      }
  }
  return total;
}
updatecoutfinal(){
  console.log("prest", this.pointageForm.value.prestataire)
  this.listpointage.forEach((el:any) => {
    this.apipointage.updatecout(el.id,this.pointageForm.value.prestataire).subscribe((res:any)=>{
      console.log("listpointage",res)
      this.pointageForm.patchValue(

        {  TotalCout:res.totalCout })
    })
    
  });
}
}

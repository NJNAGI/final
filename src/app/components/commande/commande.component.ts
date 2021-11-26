import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';
import { PrestataireService } from 'src/app/services/prestataire.service';
import { ServiceuniteService } from 'src/app/services/serviceunite.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  listunite:any
  listprestataire:any
  listcomd:any
  totalheure=0
  commandeForm:FormGroup;
  
  @ViewChild('htmlData') htmlData:ElementRef;

  constructor(private apiunite:ServiceuniteService,private apiprestataire:PrestataireService,private commandeservice:CommandeService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.commandeForm = this.formBuilder.group({
      id: ['', Validators.required],
      Moyencout: ['', Validators.required],
      prestataire: ['', Validators.required]
      
     
    })
   
    this.getallunite()
    this.getallprestataire()
    this.getallcommande()
  
  }

  getallunite(){
    this.apiunite.getunite().subscribe((res:any)=>{
      this.listunite=res
      console.log("unite",res)
    })
  }

  updatecout(){
    console.log("prest", this.commandeForm.value.prestataire)
    this.listcomd.forEach((el:any) => {
      this.commandeservice.updatecout(el.id,this.commandeForm.value.prestataire).subscribe((res:any)=>{
        console.log("listpointage",res)
        this.commandeForm.patchValue(

          {  Moyencout:res.moyencout })
      })
      
    });
  }

  getallcommande(){
    this.commandeservice.getcommande().subscribe((res:any)=>{
      this.listcomd=res
      console.log("commandeeeeeeeeeeeeeeeee",res)
    })
  }

  getallprestataire(){
    this.apiprestataire.getprestataire().subscribe((res:any)=>{
      this.listprestataire=res
      console.log("prestataire",res)
    })
  }
cout(){
  this.commandeservice.updateetat(1,23344.098).subscribe((res:any)=>{
    this.listcomd=res
    console.log("commande",res)
  })
}
  getTotal() {
    let total = 0;
    for (var i = 0; i < this.listcomd.length; i++) {
        if (this.listcomd[i].heuretheorique) {
            total += Number(this.listcomd[i].heuretheorique);
            this.totalheure = total;
            console.log("heure",this.totalheure)
           this.commandeForm.value.sommeheure=total
           console.log("sssss", this.commandeForm.value.sommeheure)
        
        }
    }
    return total;
  
}

// updatecout(){
//   let total1=0;
//   console.log("prest", this.commandeForm.value.prestataire)
//   this.listcomd.forEach((el:any) => {
//     total1=total*
//     this.apipointage.updatecout(el.id,this.pointageForm.value.prestataire).subscribe((res:any)=>{
//       console.log("listpointage",res)
//       this.commandeForm.patchValue(

//         {  TotalCout:res.totalCout })
//     })
    
//   });
// }
public openPDF():void {
  let DATA = document.getElementById('htmlData')!;
      
  html2canvas(DATA).then((canvas) => {
      
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;
      
      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
      
      PDF.save('facture.pdf');
  });     
  }
}

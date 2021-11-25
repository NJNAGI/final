import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from 'src/app/services/commande.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-detailcommande',
  templateUrl: './detailcommande.component.html',
  styleUrls: ['./detailcommande.component.css']
})
export class DetailcommandeComponent implements OnInit {
  detailcommande: FormGroup;
  id=this.activeroute.snapshot.params.id
  commande:any
  list:any
  // @ViewChild('htmlData') htmlData:ElementRef;
  constructor(private formBuilder: FormBuilder, private activeroute:ActivatedRoute,private apidata:CommandeService) { }

  ngOnInit(): void {
    this.getonecommande()
    this.detailcommande = this.formBuilder.group({
      id: ['', Validators.required],
      annee: ['', Validators.required],
      mois: ['', Validators.required],
      heurereel: ['', Validators.required],
      depensereel: ['', Validators.required],
      heuretheorique: ['', Validators.required],
      depensetheorique: ['', Validators.required],
      ref_demande: ['', Validators.required],
      code_prestataire: ['', Validators.required],
      moyencout: ['', Validators.required],
      code_societe: ['', Validators.required],
      nom_societe: ['', Validators.required],
      email: ['', Validators.required],
      demandeur: ['', Validators.required],


     
  });
  }
  getonecommande(){
    this.apidata.getcommandeById(this.id).subscribe((res:any)=>{
      this.commande=res
      this.list=res
      console.log("listtt",this.list)
      console.log("commande",this.commande)
      this.detailcommande.patchValue({
        annee:res.annee,
        mois:res.mois,
        heurereel:res.heurereel,
        depensereel:res.depensereel,
        heuretheorique:res.heuretheorique,
        depensetheorique:res.depensetheorique,
        ref_demande:res.demande.reference,
        code_prestataire:res.prestataire.siege_social,
        code_societe:res.prestataire.societe.code_societe,
        nom_societe:res.prestataire.societe.nom,
        email:res.prestataire.email,
        demandeur:res.demande.demandeur,



        moyencout:res.moyencout,
        id:res.id
      })
      console.log("reponse",res)
    })
   
  }
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

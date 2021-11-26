import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PrestataireService } from 'src/app/services/prestataire.service';
import { ServiceetablissementsService } from 'src/app/services/serviceetablissements.service';
import { ServiceuniteService } from 'src/app/services/serviceunite.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addprestataire',
  templateUrl: './addprestataire.component.html',
  styleUrls: ['./addprestataire.component.css']
})
export class AddprestataireComponent implements OnInit {

  prestataireForm: FormGroup;
  submitted = false;
  listcout:any
  listsoc:any
  constructor(private formBuilder: FormBuilder,private route:Router,private apietab:ServiceetablissementsService, private apidata:PrestataireService) { }

  ngOnInit(): void {
    this.getallcout()
    this.getallsociete()
    this.prestataireForm = this.formBuilder.group({
      code_prestataire: ['', Validators.required],
      siege_social: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', Validators.required],
      Fax: ['', Validators.required],
      date_signature: ['', Validators.required],
      fin_convention: ['', Validators.required],
      site: ['', Validators.required],
      id_cout: ['', Validators.required],
      code_societe: ['', Validators.required],

      
    
      




     
     
  });
  }
  get f() { return this.prestataireForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.prestataireForm.invalid) {
        return;
    }

    // display form values on success
// console.log("idddddd",this.prestataireForm.value.cout)
    this.apidata.addprestataire1(this.prestataireForm.value.id_cout,this.prestataireForm.value.code_societe,
      this.prestataireForm.value).subscribe(res=>{
      Swal.fire(
        'added!',
        'Your prestataire has been added.',
        'success'
      )
      this.route.navigateByUrl('/home/listeprestataire')
     })
   
}
getallcout(){
  this.apidata.getcout().subscribe((res:any)=>{
    this.listcout=res
    console.log("list of cout",res)
  })
}
getallsociete(){
  this.apietab.getsociete().subscribe((res:any)=>{
    this.listsoc=res
    console.log("list of societe",res)
  })
}

}

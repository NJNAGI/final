import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PrestataireService } from 'src/app/services/prestataire.service';
import { ServiceloginService } from 'src/app/services/servicelogin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addinterimaire',
  templateUrl: './addinterimaire.component.html',
  styleUrls: ['./addinterimaire.component.css']
})
export class AddinterimaireComponent implements OnInit {

  interimaireForm: FormGroup;
  submitted = false;
  listprestataire:any
  constructor(private formBuilder: FormBuilder,private route:Router, private apidata:PrestataireService) { }

  ngOnInit(): void {
    this.getallprestataire()
    this.interimaireForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      cin: ['', Validators.required],
      date_blocage: ['', Validators.required],
      motif_blocage: ['', Validators.required],
      code_prestataire: ['', Validators.required]

     
     
  });
  }
  get f() { return this.interimaireForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.interimaireForm.invalid) {
        return;
    }

    // display form values on success

    this.apidata.addinterimaire(this.interimaireForm.value.code_prestataire,this.interimaireForm.value).subscribe(res=>{
      Swal.fire(
        'added!',
        'Your interimaire has been added.',
        'success'
      )
      this.route.navigateByUrl('/home/listeinterimaire')

     })
   
}
getallprestataire(){
  this.apidata.getprestataire().subscribe((res:any)=>{
    this.listprestataire=res
    console.log("list of prestataire",res)
  })
}

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceetablissementsService } from 'src/app/services/serviceetablissements.service';
import { ServiceloginService } from 'src/app/services/servicelogin.service';
import { ServiceuniteService } from 'src/app/services/serviceunite.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
  RegisterForm: FormGroup;
  submitted = false;
  listsociete:any
  listunite:any
  listetab:any
  fileToUpload:Array<File>=[];
  constructor(private formBuilder: FormBuilder,private route:Router, private apidata:ServiceloginService
    ,private apietab:ServiceetablissementsService,private apiunite:ServiceuniteService) { }

  ngOnInit(): void {
    this.getAlletablisements()
    this.getAllsociete()
    this.getAllunite()
    this.RegisterForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      matricule: ['', Validators.required],
      poste: ['', Validators.required],
      niveau_hierarchique: ['', Validators.required],
      email: ['', Validators.required],
      id_etablisement: ['', Validators.required],
      code_societe: ['', Validators.required] ,
      id_unite: ['', Validators.required],
      // file: ['', Validators.required],


  });
  }
  get f() { return this.RegisterForm.controls; }
  // handleFileInput(files: any){
  //   this.fileToUpload=<Array<File>>files.target.files;
  //   console.log(this.fileToUpload);
  // }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.RegisterForm.invalid) {
      console.log("err de validation",this.RegisterForm.value)
        return;

    }

    let formdata=new FormData();
    formdata.append("username",this.RegisterForm.value.username);
    formdata.append("password",this.RegisterForm.value.password);
    formdata.append("firstName",this.RegisterForm.value.firstName);
    formdata.append("lastName",this.RegisterForm.value.lastName);
    formdata.append("matricule",this.RegisterForm.value.matricule);
    formdata.append("poste",this.RegisterForm.value.poste);
    formdata.append("niveau_hierarchique",this.RegisterForm.value.niveau_hierarchique);
    formdata.append("email",this.RegisterForm.value.email);
    formdata.append("idEtab",this.RegisterForm.value.id_etablisement);
    formdata.append("codeSoc",this.RegisterForm.value.code_societe);
    formdata.append("idUnite",this.RegisterForm.value.id_unite);



    // formdata.append("file",this.fileToUpload[0]);






    // display form values on success

    this.apidata.register(
       this.RegisterForm.value.id_unite,
      this.RegisterForm.value.id_etablisement,
      this.RegisterForm.value.code_societe,
      formdata).subscribe(res=>{
      console.log(res)
      Swal.fire(
        'user added !',
        'success'
      )
      this.route.navigateByUrl('')
     })
    }
    getAllsociete(){
      this.apietab.getsociete().subscribe((res:any)=>{
        this.listsociete=res
        console.log("societe",res)
      })
    }
    getAlletablisements(){
      this.apietab.getetablissements().subscribe((res:any)=>{
        this.listetab=res
        console.log("etab",res)
      })
    }
    getAllunite(){
      this.apiunite.getunite().subscribe((res:any)=>{
        this.listunite=res
        console.log("unite",res)
      })
    }


}

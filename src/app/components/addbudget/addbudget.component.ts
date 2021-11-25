import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addbudget',
  templateUrl: './addbudget.component.html',
  styleUrls: ['./addbudget.component.css']
})
export class AddbudgetComponent implements OnInit {
  budgetForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private route:Router, private apidata:BudgetService) { }

  ngOnInit(): void {
    this.budgetForm = this.formBuilder.group({
      annee: ['', Validators.required],
      perimetre: ['', Validators.required],
      montant: ['', Validators.required],




  });
  }
  get f() { return this.budgetForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.budgetForm.invalid) {
        return;
    }

    // display form values on success

    this.apidata.addbudget(this.budgetForm.value).subscribe(res=>{
      Swal.fire(
        'added!',
        'Your budget has been added.',
        'success'
      )
      this.route.navigateByUrl('/home/listebudget')
     })

}

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  maritalStatuses = [
    'Married', 'Single','Widowed','Divorced'
  ]
  monthlyIncomes = [
    "1000€  -  5000€",
    "5000€  -  10000€",
    "< 10000€",
  ]
  addForm! :FormGroup
  formProgress = 0
  formSubmitted = false

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
    this.addForm.valueChanges.subscribe(res=> {
      let progress = 0
      Object.keys(this.addForm.controls).map(key => {
        if(this.addForm.get(key)?.valid)
          progress++
      })

      this.formProgress = progress*17

    })
  }

  initForm() : void {
    this.addForm = this.fb.group({
      FirstName : ['',[Validators.required]],
      LastName : ['',[Validators.required]],
      Email : [, [Validators.email,Validators.required]],
      //Age : [ , [Validators.min(0)]],
      MonthlyIncome : [,[Validators.required]],
      MaritalStatus : [,[Validators.required]],
      NumberOfChildren : [,[Validators.min(0) , Validators.required]]
    })
  }

  submit(){
    this.formSubmitted = true
  }

}

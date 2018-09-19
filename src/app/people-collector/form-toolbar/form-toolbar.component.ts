import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, NgForm,} from '@angular/forms';

@Component({
  selector: 'form-toolbar',
  templateUrl: './form-toolbar.component.html',
  styleUrls: ['./form-toolbar.component.css']
})
export class FormToolbarComponent{

  pattern = '^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$';
  nameCheck = new FormControl('', [Validators.required, Validators.pattern(this.pattern)]);

  getErrorMessage() {
    return this.nameCheck.hasError('required') ? 'You must enter a value' :
        this.nameCheck.hasError('pattern') ? 'Please input letters only.' :
            '';
  }
}
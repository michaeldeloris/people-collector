import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'form-toolbar',
  templateUrl: './form-toolbar.component.html',
  styleUrls: ['./form-toolbar.component.css']
})
export class FormToolbarComponent implements OnInit {

  constructor() { 

    
  }

  ngOnInit() {
  }

  regex = new RegExp(/[A-Z][a-z]/);
  nameCheck = new FormControl('', [Validators.required, Validators.pattern(this.regex)]);
  
  getErrorMessage() {
    return this.nameCheck.hasError('required') ? 'You must enter a value' :
        this.nameCheck.hasError('email') ? 'Not a valid email' :
            '';
  }

}
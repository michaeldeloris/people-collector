import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, NgForm, } from '@angular/forms';
import { PeopleService } from '../../shared/services/people.service';
import { Location } from '@angular/common';
import { People } from '../../shared/models/people.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'form-toolbar',
  templateUrl: './form-toolbar.component.html',
  styleUrls: ['./form-toolbar.component.css']
})
export class FormToolbarComponent {

  peoples: People[];

  constructor(
    private location: Location,
    private peopleService: PeopleService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  pattern = '^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$';
  nameCheck = new FormControl('', [Validators.required, Validators.pattern(this.pattern)]);

  getErrorMessage() {
    return this.nameCheck.hasError('required') ? 'You must enter a value' :
      this.nameCheck.hasError('pattern') ? 'Please type letters only.' :
        '';
  }

  newPeople(peopleName): void {
    if (this.nameCheck.hasError('required')) {
      alert('Please enter a name')
    } else if (this.nameCheck.hasError('pattern')) {
      alert('Please enter a name with letters only')
    } else {

      let newPeople: People = { name : peopleName };
      this.peopleService.post(newPeople);

    }
  }
}
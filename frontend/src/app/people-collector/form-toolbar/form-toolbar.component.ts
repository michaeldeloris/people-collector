import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, NgForm, } from '@angular/forms';
import { PeopleLocalService } from '../../shared/services/people-local.service';
import { People } from '../../shared/models/people.model';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';



@Component({
  selector: 'form-toolbar',
  templateUrl: './form-toolbar.component.html',
  styleUrls: ['./form-toolbar.component.css']
})
export class FormToolbarComponent {

  constructor(
    private peopleService: PeopleLocalService,
    private snackBar: SnackbarService,
    private dialog: MatDialog,
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

      this.snackBar.errorNameMissing();
    } else if (this.nameCheck.hasError('pattern')) {

      this.snackBar.errorNameLettersOnly();
    } else {

      let newPeople: People = {
        "id": "",
        "name": peopleName,
        "resume": "No resume to show for this one!",
      };

      this.peopleService.storeOnLocalStorage(newPeople);
    }
  }

  deletePeople(peopleName): void {
    console.log('delete');
    
    this.peopleService.deletePeople(peopleName);
  };

  openInfoForm() {
    console.log('In progress...');
  }
}
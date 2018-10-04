import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar : MatSnackBar ) { }

  addPeople(){
    return this.snackBar.open('People added to collection!', 'OK');
  }

   addPeopleFail(){
    return this.snackBar.open('Adding failed', 'OK');
  }

  errorNameMissing(){
    return this.snackBar.open('Please enter a name', 'OK');
  }

  errorNameLettersOnly(){
    return this.snackBar.open('Please use letters only', 'OK');
  }

}

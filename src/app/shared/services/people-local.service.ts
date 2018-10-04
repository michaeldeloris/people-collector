import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { People } from '../models/people.model';
import { Observable, of } from 'rxjs';
import { VerificationsService } from './verifications.service';
import { GeneratorService } from './generator.service'
import { WikiApiService } from './wiki-api.service';
import { SnackbarService } from '../services/snackbar.service'

@Injectable({
  providedIn: 'root'
})
export class PeopleLocalService {

  constructor(
    protected localStorage: LocalStorage,
    protected verification: VerificationsService,
    protected generator: GeneratorService,
    protected wikiApi: WikiApiService,
    protected snackBar: SnackbarService,
  ) { }

  storeOnLocalStorage(newPeople: People): void {

    var people: People[] = JSON.parse(localStorage.getItem('peoples') || "[]");
    var checkName = this.verification.isUniqueName(newPeople.name);
    if (!checkName) {

      alert('People already exists!');
      return;
    }
    newPeople.id = this.generator.generateId();

    this.wikiApi.getExtract(newPeople.name).subscribe(
      res => {
        var resultString = JSON.stringify(res.body);
        var resultParsed = JSON.parse(resultString);
        const pageId = Object.keys(resultParsed.query.pages)[0];
        const verif = this.verification.isMatchingId(pageId);
        const result = resultParsed.query.pages[pageId].extract;
        newPeople.resume = result;
        if (res && verif == true) {
          people.push(newPeople);
          localStorage.setItem('peoples', JSON.stringify(people));
          this.snackBar.addPeople();
        }else{
          this.snackBar.addPeopleFail();
        }
      });
  }

  getPeople(): Observable<People[]> {

    var people: People[] = JSON.parse(localStorage.getItem('peoples') || "[]");
    return of(people);
  }

  deletePeople(peopleId): void {

    var people: People[] = JSON.parse(localStorage.getItem('peoples') || "[]");
    var peopleindex = people.findIndex(People => People.id === peopleId);
    if (peopleindex > -1) {

      people.splice(peopleindex, 1);
      localStorage.setItem('peoples', JSON.stringify(people));
    }
    location.reload();
  }
}

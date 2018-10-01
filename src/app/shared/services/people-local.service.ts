import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { People } from '../models/people.model';
import { Observable, of } from 'rxjs';
import { VerificationsService } from './verifications.service';
import { GeneratorService } from './generator.service'

@Injectable({
  providedIn: 'root'
})
export class PeopleLocalService {

  constructor(
    protected localStorage: LocalStorage,
    protected verification: VerificationsService,
    protected generator: GeneratorService,
  ) { }

  storeOnLocalStorage(newPeople: People): void {

    var people: People[] = JSON.parse(localStorage.getItem('peoples') || "[]");
    var checkName = this.verification.isUniqueName(newPeople.name);
    if (!checkName){

      alert('People already exists!');
      return;
    }
    newPeople.id = this.generator.generateId();

    this.verification.isMatchingName(newPeople.name)

    people.push(newPeople);
    localStorage.setItem('peoples', JSON.stringify(people));
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

import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { People } from '../models/people.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleLocalService {

  constructor(protected localStorage: LocalStorage) { }

  storeOnLocalStorage(newPeople: People): void {

    var people: People[] = JSON.parse(localStorage.getItem('peoples') || "[]");

    newPeople.id = people.length;

    people.push(newPeople);

    localStorage.setItem('peoples', JSON.stringify(people));

    console.log(people);
  }

  getPeople(): Observable<any> {

    var people: People[] = JSON.parse(localStorage.getItem('peoples') || "[]");

    return of(people);
  }

  deletePeople(peopleName) {

    var people: People[] = JSON.parse(localStorage.getItem('peoples') || "[]");

    people.splice(0, 1);

    localStorage.setItem('peoples', JSON.stringify(people));

    console.log("Deleted.");
    console.log(people);
  }
}

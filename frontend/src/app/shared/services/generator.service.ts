import { Injectable } from '@angular/core';
import { People } from '../models/people.model'
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor(protected localStorage: LocalStorage) { }

  generateId(): string {                //Return an unique ID.

    var people: People[] = JSON.parse(localStorage.getItem('peoples') || "[]");
    var uniqueId: string = 'id-' + Math.random().toString(36).substr(2, 16);
    var peopleindex: number = people.findIndex(People => People.id === uniqueId);

    while (peopleindex != -1) {

      uniqueId = 'id-' + Math.random().toString(36).substr(2, 16);
    }
    return uniqueId;
  }
}

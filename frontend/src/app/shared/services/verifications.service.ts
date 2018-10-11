import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { People } from '../models/people.model';
import { Jsonp } from '@angular/http';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class VerificationsService {

  constructor(
    protected localStorage: LocalStorage,
    protected jsonp: Jsonp,
  ) { }

  isUniqueName(name): boolean {         //Check if new People's name isn't already used (ignoring uppercases).

    var people: People[] = JSON.parse(localStorage.getItem('peoples') || "[]");
    var peopleindex = people.findIndex(People => People.name.toLowerCase() === name.toLowerCase());
    if (peopleindex != -1) {

      return false;
    } else {

      return true;
    }
  }

  isMatchingId(pageId) {                    //Check if there is a wiki page associate with the id.

    if (pageId == -1) {
      return false;
    } else {
      return true;
    }

  }
}
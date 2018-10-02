import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { People } from '../models/people.model';
import { Jsonp } from '@angular/http';



@Injectable({
  providedIn: 'root'
})
export class VerificationsService {

  constructor(
    protected localStorage: LocalStorage,
    protected jsonp: Jsonp,
  ) { }

  isUniqueName(name): boolean {         //Check if new People's name isn't already used.

    var people: People[] = JSON.parse(localStorage.getItem('peoples') || "[]");
    var peopleindex = people.findIndex(People => People.name === name);
    if (peopleindex != -1) {

      return false;
    } else {

      return true;
    }
  }

  isMatchingName(name) {                    //Check is new People's name is matching with a wiki page.

    var url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${name}`;
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.setRequestHeader("Origin", "http://localhost:4200/addPeople");


    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var resp = xhr.responseText;
        var parsedResp = parseInt(resp);

        if (isNaN(parsedResp)) {
          console.log('if');

        } else {
          console.log('else');

        }
      }
    }
    xhr.send(null);
  }
}

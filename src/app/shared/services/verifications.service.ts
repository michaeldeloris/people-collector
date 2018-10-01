import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { People } from '../models/people.model';


@Injectable({
  providedIn: 'root'
})
export class VerificationsService {

  constructor(protected localStorage: LocalStorage) { }

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

    var url = `https://fr.wikipedia.org/wiki/${name}`;
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true); 
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    
 
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            var resp = xhr.responseText;
            var parsedResp = parseInt(resp);
             
            if (isNaN(parsedResp)){
                console.log('if');
                
            }else{
                console.log('else');
                
            }
        }
    }
    xhr.send(null);
  }
}

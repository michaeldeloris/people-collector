import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { PeopleInterface } from '../models/people-interface.model';

@Injectable({
  providedIn: 'root'
})
export class WikiApiService {

  constructor(private http: HttpClient) { }

  getExtract(name): Observable<HttpResponse<PeopleInterface>> {

    var url = 'https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles='+name.toLowerCase();
    var resp = this.http.get<PeopleInterface>(url, {
      observe: 'response'
    });
    return (resp);
  }
}

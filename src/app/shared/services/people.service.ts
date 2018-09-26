import { Injectable } from '@angular/core';
import { People } from '../models/people.model';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class PeopleService {

    constructor() { }

    private peoples: People[] = [

        { name: "Mimi" },
        { name: "Toto" },
        { name: "Jojo" }
    ];

    get() {
        return this.peoples;
    }

    post(people: People) {

        this.peoples.push(people);
        console.log(this.peoples);
    }

    delete() {

    }

}

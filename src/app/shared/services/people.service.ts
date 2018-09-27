import { Injectable } from '@angular/core';
import { People } from '../models/people.model';
import { Observable, of } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class PeopleService {

    private peoples: People[] = [

        { name: "Mimi" },
        { name: "Toto" },
        { name: "Jojo" }
    ];

    get(): Observable<People[]> {

        return of(this.peoples);
    }

    post(people: People) {

        console.log(`Push de \" ${people.name} \" en cours...`);

        this.peoples.push(people);
        console.log(this.peoples);
    }

    delete() { }
}

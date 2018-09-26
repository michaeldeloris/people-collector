import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../shared/services/people.service';
import { People } from '../../shared/models/people.model';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  private people: People[];

  constructor(
    private peopleService: PeopleService,
  ) { }

  ngOnInit() {

    this.getPeoples();
  }

  public getPeoples() {

    let people = this.peopleService.get();

    console.log(people);
    

  }
}

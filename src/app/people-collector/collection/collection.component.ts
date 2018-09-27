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

  private trucs = [
    {number: 'un'},
    {number: 'deux'},
    {number: 'trois'}
  ]

  constructor(
    private peopleService: PeopleService,
  ) { }

  ngOnInit() {

    this.peopleService.get().subscribe(
      async (peoples: People[]) => {
        this.people = await peoples;
        console.log(peoples);
      }  );
      
  }

  public getPeoples() {  }
}

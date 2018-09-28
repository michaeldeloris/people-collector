import { Component, OnInit } from '@angular/core';
import { PeopleLocalService } from '../../shared/services/people-local.service';
import { People } from '../../shared/models/people.model';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  private people: People[] = [];

  constructor(private peopleService: PeopleLocalService) { }

  ngOnInit() {
    
    this.peopleService.getPeople().subscribe(
      async(peoples: People[]) => {
        this.people = await peoples;
        console.log(this.people);
      });

  }
}

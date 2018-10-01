import { Component, OnInit } from '@angular/core';
import { PeopleLocalService } from '../../shared/services/people-local.service';
import { People } from '../../shared/models/people.model';

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
      async (peoples: People[]) => {
        this.people = await peoples;
      });

  }

  deletePeople(id) {

    this.peopleService.deletePeople(id);
  }
}

import { Component, OnInit } from '@angular/core';
import { PeopleLocalService } from '../../shared/services/people-local.service';
import { People } from '../../shared/models/people.model';
import { WikiApiService } from '../../shared/services/wiki-api.service';

@Component({
  selector: 'collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  private people: People[] = [];
  private resumes = [];

  constructor(
    private peopleService: PeopleLocalService,
    private wikiApi: WikiApiService,
  ) { }

  ngOnInit() {

    this.peopleService.getPeople().subscribe(
      async (peoples: People[]) => {
        this.people = await peoples;
      }
    );
  }

  deletePeople(id) {

    this.peopleService.deletePeople(id);
  }
}

import { Component, OnInit } from '@angular/core';
import { PeopleLocalService } from '../../shared/services/people-local.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit {

  constructor(
    public people : PeopleLocalService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }
}

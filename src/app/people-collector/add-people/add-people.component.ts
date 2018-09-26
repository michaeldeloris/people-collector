import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../shared/services/people.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit {

  constructor(
    public people : PeopleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }
}

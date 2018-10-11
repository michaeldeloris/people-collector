import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from '../collection/collection.component';
import { RouterModule, Routes } from '@angular/router';
import { PeopleCollectorComponent } from '../people-collector.component';
import { AddPeopleComponent } from '../add-people/add-people.component';

const routes: Routes=[{
  path: 'collection',
  component: CollectionComponent,
  pathMatch: 'full'
},
{
  path:'home',
  component: PeopleCollectorComponent,
  pathMatch: 'full',
},
{
  path:'addPeople',
  component: AddPeopleComponent,
  pathMatch: 'full',
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class PeopleCollectorRoutingModule { }

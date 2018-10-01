import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleCollectorComponent } from './people-collector.component';
import { CollectionComponent } from './collection/collection.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PeopleCollectorRoutingModule } from './people-collector-routing/people-collector-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddPeopleComponent } from './add-people/add-people.component';
import { FormToolbarComponent } from './form-toolbar/form-toolbar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from  '@angular/common/http';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    MatGridListModule,
    CommonModule,
    PeopleCollectorRoutingModule,
    SharedModule,
    MatCardModule,
  ],
  declarations: [
    PeopleCollectorComponent,
    CollectionComponent,
    ToolbarComponent,
    AddPeopleComponent,
    FormToolbarComponent,

  ],
  exports: [
    PeopleCollectorComponent,
    CollectionComponent
  ],
  providers: [
    HttpClientModule,
  ]
})
export class PeopleCollectorModule { }

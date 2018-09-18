import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleCollectorComponent } from './people-collector.component';
import { CollectionComponent } from './collection/collection.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PeopleCollectorRoutingModule } from './people-collector-routing/people-collector-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddPeopleComponent } from './add-people/add-people.component';
import { FormToolbarComponent } from './form-toolbar/form-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    PeopleCollectorRoutingModule,
    SharedModule,
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
  ]
})
export class PeopleCollectorModule { }

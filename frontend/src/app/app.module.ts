import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PeopleCollectorModule } from './people-collector/people-collector.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';
import { StorageServiceModule } from 'angular-webstorage-service';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    PeopleCollectorModule,
    BrowserAnimationsModule,
    StorageServiceModule,
    MatCardModule,
    JsonpModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

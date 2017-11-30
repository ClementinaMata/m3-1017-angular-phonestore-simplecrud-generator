import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';

import {routes} from './routes';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';

import {PhoneService} from '../services/phone.service';


@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {Route, RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {registerLocaleData} from '@angular/common'
import localeRU from '@angular/common/locales/ru'
import localeUK from '@angular/common/locales/uk'

import {AppComponent} from './app.component';
import {IncrementPipe} from './pipes';
import {BoldAndColorDirective} from './directives';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import { TestComponent } from './components/test/test.component';

registerLocaleData(localeRU, 'ru')
registerLocaleData(localeUK, 'uk')



@NgModule({
  declarations: [
    AppComponent,
    IncrementPipe,
    BoldAndColorDirective,
    HomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru'},
    {provide: LOCALE_ID, useValue: 'uk'},
    IncrementPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

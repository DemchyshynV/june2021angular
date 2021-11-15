import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import {UserService} from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

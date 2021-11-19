import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {Route, RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {registerLocaleData} from '@angular/common'
import localeRU from '@angular/common/locales/ru'
import localeUK from '@angular/common/locales/uk'

import {AppComponent} from './app.component';
import {CommentsComponent} from "./components/comments/comments.component";
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserResolveService} from "./services";
import {PostsComponent, UserComponent, UsersComponent} from './components';
import {HomeComponent} from './components/home/home.component';
import {TestGuard} from './guards/test.guard';
import {FormsComponent} from './components/forms/forms.component';
import {TestComponent} from './components/test/test.component';
import { IncrementPipe } from './pipes/increment.pipe';
import { BoldAndColorDirective } from './directives/bold-and-color.directive';

registerLocaleData(localeRU, 'ru')
registerLocaleData(localeUK, 'uk')

const routes: Route[] = [
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {
    path: '', component: HomeComponent, children: [
      {
        // path: 'users', component: UsersComponent, canActivate:[TestGuard], canDeactivate:[TestGuard],children: [
        path: 'users', component: UsersComponent, canActivateChild: [TestGuard], canDeactivate: [TestGuard], children: [
          {
            path: ':id', component: UserDetailsComponent,
            resolve: {data: UserResolveService}
          },
        ]
      },

      {path: 'posts', component: PostsComponent},
      {path: 'comments', component: CommentsComponent},
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    PostsComponent,
    UserDetailsComponent,
    HomeComponent,
    FormsComponent,
    TestComponent,
    IncrementPipe,
    BoldAndColorDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [
    {provide:LOCALE_ID, useValue:'ru'},
    {provide:LOCALE_ID, useValue:'uk'},
    IncrementPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

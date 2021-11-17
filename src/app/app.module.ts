import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {Route, RouterModule} from "@angular/router";
import {CommentsComponent} from "./components/comments/comments.component";
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserResolveService} from "./services";
import {PostsComponent, UserComponent, UsersComponent} from './components';
import {HomeComponent} from './components/home/home.component';
import {TestGuard} from './guards/test.guard';
import { FormsComponent } from './components/forms/forms.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Route[] = [
  {path:'', redirectTo:'posts', pathMatch:'full'},
  {
    path: '', component: HomeComponent, children: [
      {
        // path: 'users', component: UsersComponent, canActivate:[TestGuard], canDeactivate:[TestGuard],children: [
        path: 'users', component: UsersComponent, canActivateChild:[TestGuard], canDeactivate:[TestGuard],children: [
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
    FormsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

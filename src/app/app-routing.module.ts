import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

const routes: Route[] = [
  {
    path: '', component: HomeComponent, children: [
      {path: 'users', loadChildren:() => import('./modules/user/user.module').then(value => value.UserModule)}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

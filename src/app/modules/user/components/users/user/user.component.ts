import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IUser} from '../../../../../interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges {

  @Input()
  user: IUser;
  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}

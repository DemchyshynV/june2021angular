import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from "../../interfaces/user.interface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;
  @Output()
  userName = new EventEmitter<string>();
  constructor() {

  }

  ngOnInit(): void {
  }

  lift() {
    this.userName.emit(this.user.name)
  }
}

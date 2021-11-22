import {AfterViewInit, Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {TestComponent} from '../test/test.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck, AfterViewInit {
  @ViewChild(TestComponent)
  testComponent: TestComponent

  constructor() {
  }

  ngOnInit(): void {

  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterViewInit(): void {
    console.log(this.testComponent.name);
  }

}

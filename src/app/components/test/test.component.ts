import {Component, OnInit} from '@angular/core';
import {IncrementPipe} from '../../pipes';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  arr2: number[];

  user = {name: 'Max', age: 18}
  name = 'kokos'
  born = new Date(1925, 5, 24, 21, 11, 33)
  now = new Date()
  arr = [1, 2, 3, 4, 5]
  color = 'green'
  constructor(private incrementPipe: IncrementPipe) {
  }

  ngOnInit(): void {
    this.arr2 = this.incrementPipe.transform(this.arr, 10)
  }

}

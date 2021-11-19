import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBoldAndColor]'
})
export class BoldAndColorDirective implements OnInit {
  @Input('appBoldAndColor')
  color: string

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.fontWeight = 'bold'
    this.elementRef.nativeElement.style.fontSize = '25px'

  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = this.color
  }

}

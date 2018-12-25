import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>()

  rats: number[] = [1, 2, 3, 4, 5]
  rate: number = 0

  previousRate: number

  constructor() { }

  ngOnInit() {
  }

  setRate(rate: number): void {
    this.rate = rate
    this.previousRate = undefined
    this.rated.emit(rate)
  }

  setTemporaryRate(r: number): void {
    if(this.previousRate === undefined)
      this.previousRate = this.rate
    
    this.rate = r
  }

  clearTemporaryRate(): void {
    if(this.previousRate !== undefined) {
      this.rate = this.previousRate
      this.previousRate = undefined
    }
  }

}

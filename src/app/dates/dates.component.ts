import { Component, OnInit, Input } from '@angular/core';
import { DateService } from '../date.service';
import { customTime } from '../customtime';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {

  @Input() dates: customTime[];
  private reverse = false;
  constructor(private dateService: DateService) { }

  ngOnInit() {
    this.getDates();
  }
  add() {
    this.dateService.addDate(Date.now()).subscribe(
      date => this.dates.push(date));
  }
  getDates() {
    this.dateService.getDates().subscribe(
      dates => this.dates = dates);
  }
  idClicked(): void {
    this.reverse = !this.reverse;
    this.dates.sort((a, b) =>
      this.sortID(a, b, this.reverse)
    );

  }

  sortID(a: customTime, b: customTime, reverse: boolean): number {

    if (+a.ID === +b.ID) {
      return 0;
    }
    let rValue = 0;
    if (+a.ID > +b.ID) {
      rValue = 1;
    }
    else {
      rValue = -1;
    }
    if (this.reverse) {
      rValue *= -1;
    }
    return rValue;
  }
  timeStampClicked():void{
    this.reverse = !this.reverse;
  }
}
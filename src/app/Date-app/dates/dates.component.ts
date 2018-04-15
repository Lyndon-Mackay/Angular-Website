import { Component, OnInit, Input } from '@angular/core';
import { DateService } from '../../Services/date.service';
import { customTime } from '../../customtime';
import { reversableComparitor } from '../../utilitymethods';

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
    this.dateService.getDates(0).subscribe(
      dates => this.dates = dates);
  }
  goToAdd()
  {
    window.location.href += "/add"
  }
  idClicked(): void {
    this.reverse = !this.reverse;
    this.dates.sort((a, b) =>
      reversableComparitor(a, b,"ID", this.reverse)
    );

  }

  timeStampClicked():void{
    this.reverse = !this.reverse;
    this.dates = this.dates.sort((a, b) =>
      reversableComparitor(a, b,"time", this.reverse)
    );
  }
  
}
import { Component, OnInit, Input } from '@angular/core';
import { DateService } from '../date.service';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {

  @Input() dates :number[];
  constructor(private dateService :DateService) { }

  ngOnInit() {
    this.getDates();
  }
  getDates()
  {
    this.dateService.getDates().subscribe(
      dates => this.dates = dates);
  }
  add()
  {

    this.dateService.addDate(Date.now()).subscribe(date =>{ this.dates.push(date)});

  }
 
}

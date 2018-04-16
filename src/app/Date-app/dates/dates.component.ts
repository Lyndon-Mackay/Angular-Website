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
  page = 0;
  maxPageNumber = 0;
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

    this.dateService.getDateCount().subscribe(num => this.maxPageNumber = Math.floor(num)
    );

    this.dateService.getDates(this.page).subscribe(
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
  nextPage()
  {
    this.page++;
    this.getDates();
  }
  previousPage()
  {
    this.page--;
    this.getDates();
  }
  timeStampClicked():void{
    this.reverse = !this.reverse;
    this.dates = this.dates.sort((a, b) =>
      reversableComparitor(a, b,"time", this.reverse)
    );
  }
  
}
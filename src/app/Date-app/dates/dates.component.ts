import { Component, OnInit, Input } from '@angular/core';
import { DateService } from '../../Services/date.service';
import { customTime } from '../../customtime';
import { reversableComparitor } from '../../utilitymethods';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {

  @Input() dates: customTime[];
  page = 0;
  maxPageNumber = 0;
  private ascendingSort = false;
  private subscription :Subscription
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

    this.subscription = this.dateService.getDates(this.page).subscribe(
      dates => this.dates = dates);
  }

  goToAdd()
  {
    window.location.href += "/add"
  }
  idClicked(): void {
    this.ascendingSort = !this.ascendingSort;
    this.modifySubscription("ID");
    

  }
  modifySubscription( column:string)
  {
    this.subscription.unsubscribe();
    this.subscription = this.dateService.getDates(this.page,column,this.ascendingSort).
    subscribe(dates => this.dates = dates);
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
    this.ascendingSort = !this.ascendingSort;
    this.modifySubscription("time");
    
  }
  
}
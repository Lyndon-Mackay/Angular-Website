import { Component, OnInit, Input } from '@angular/core';
import { customTime } from '../customtime';
import { ActivatedRoute } from '@angular/router';
import { DateService } from '../date.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-date-detail',
  templateUrl: './date-detail.component.html',
  styleUrls: ['./date-detail.component.css']
})
export class DateDetailComponent implements OnInit {

  @Input() date:customTime
  constructor(private route: ActivatedRoute,
    private dateService:DateService,
  private location :Location) { }

  ngOnInit() {
    this.getDate();
  }

  getDate():void{
    const id = this.getID();
    this.dateService.getDateByID(id).subscribe(date => this.date = date);

  }
  getID():string
  {
    return  this.route.snapshot.paramMap.get("ID");
  }
  goBack()
  {
    this.location.back();
  }
  update()
  {
    const id = this.getID();
    this.dateService.updateDate(new customTime (id,Date.now())).subscribe(() => this.goBack());

  }
  delete()
  {
    const id = this.getID();
    this.dateService.deleteDate(id);
    this.goBack();
  }
}

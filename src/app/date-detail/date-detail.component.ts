import { Component, OnInit, Input } from '@angular/core';
import { customTime } from '../customtime';
import { ActivatedRoute } from '@angular/router';
import { DateService } from '../date.service';

@Component({
  selector: 'app-date-detail',
  templateUrl: './date-detail.component.html',
  styleUrls: ['./date-detail.component.css']
})
export class DateDetailComponent implements OnInit {

  @Input() date:customTime
  constructor(private route: ActivatedRoute,
    private dateService:DateService) { }

  ngOnInit() {
    this.getDate();
  }

  getDate():void{
    const id = this.route.snapshot.paramMap.get("ID");
    this.dateService.getDateByID(id).subscribe(date => this.date = date);

  }
  update()
  {
    const id = this.route.snapshot.paramMap.get("ID");
    console.log(JSON.stringify(new customTime (id,Date.now())));
    this.dateService.updateDate(new customTime (id,Date.now())).subscribe(date => this.date =date);
  }
}

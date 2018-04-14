import { Component, OnInit } from '@angular/core';
import { DateService } from '../../Services/date.service';

@Component({
  selector: 'app-date-add',
  templateUrl: './date-add.component.html',
  styleUrls: ['./date-add.component.css']
})
export class DateAddComponent implements OnInit {

  invalid = false;
  constructor(private dateService:DateService) { }

  ngOnInit() {
  }
  add(id:string)
  {
    id = id.trim();
    if(!id)
    {
      return;
    }
    let number = parseInt(id);
    if(number === NaN)
    {
      return;
    }
    this.dateService.addDateToID(id,Date.now());


  }

}

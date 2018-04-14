import { Component, OnInit } from '@angular/core';
import { DateService } from '../../Services/date.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-date-add',
  templateUrl: './date-add.component.html',
  styleUrls: ['./date-add.component.css']
})
export class DateAddComponent implements OnInit {

  invalid = false;
  constructor(private dateService: DateService,
    private location :Location) { }

  ngOnInit() {
  }
  add(id: string) {
    let num = parseInt(id);
    if (isNaN(num)) {
      this.invalid = true;
      return;
    }
    this.dateService.addDateToID(id, Date.now()).subscribe();

  }
  back()
  {
    this.location.back();
  }
}

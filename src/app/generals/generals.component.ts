import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { General } from '../general';

@Component({
  selector: 'app-generals',
  templateUrl: './generals.component.html',
  styleUrls: ['./generals.component.css']
})
export class GeneralsComponent implements OnInit {

  generals:General[];
  constructor(private generalService:GeneralService) { }

  ngOnInit() {
    this.getGenerals();
  }
 
 
  getGenerals(): void {
    this.generalService.getGenerals()
        .subscribe(generals => this.generals = generals);
  }
}

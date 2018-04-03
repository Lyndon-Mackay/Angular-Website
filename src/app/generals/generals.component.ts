import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-generals',
  templateUrl: './generals.component.html',
  styleUrls: ['./generals.component.css']
})
export class GeneralsComponent implements OnInit {


  constructor(private generalService:GeneralService) { }

  ngOnInit() {
  }

}

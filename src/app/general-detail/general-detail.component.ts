import { Component, OnInit, Input } from '@angular/core';
import {General} from '../general'
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../general.service';
@Component({
  selector: 'app-general-detail',
  templateUrl: './general-detail.component.html',
  styleUrls: ['./general-detail.component.css']
})
export class GeneralDetailComponent implements OnInit {

  @Input() general:General
  constructor( private route: ActivatedRoute,
    private generalService:GeneralService
  ) { }

  ngOnInit() {
    this.getGeneral()
  }
  getGeneral():void{
    const name = this.route.snapshot.paramMap.get('Name');
    this.generalService.getGeneral(name)
    .subscribe(general => this.general = general);
  }

}

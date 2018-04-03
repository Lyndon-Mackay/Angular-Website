import { Component, OnInit, Input } from '@angular/core';
import {General} from '../general'
@Component({
  selector: 'app-general-detail',
  templateUrl: './general-detail.component.html',
  styleUrls: ['./general-detail.component.css']
})
export class GeneralDetailComponent implements OnInit {

  @Input() general:General
  constructor() { }

  ngOnInit() {
  }

}

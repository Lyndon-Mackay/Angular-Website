import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../Services/general.service';
import { General } from '../../general';
import { reversableComparitor } from '../../utilitymethods';

@Component({
  selector: 'app-generals',
  templateUrl: './generals.component.html',
  styleUrls: ['./generals.component.css']
})
export class GeneralsComponent implements OnInit {

  generals: General[];
  private reverse = false;
  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    this.getGenerals();
  }
  countryClicked(): void {
    this.reverse = !this.reverse;
    this.generals.sort((a, b) => this.sort(a, b, "Country", this.reverse));
  }
  getGenerals(): void {
    this.generalService.getGenerals()
      .subscribe(generals => this.generals = generals);
  }
  nameClicked(): void {
    this.reverse = !this.reverse;
    this.generals.sort((a, b) => this.sort(a, b, "Name", this.reverse));
  }
  sort(a, b, property: string, reverse: boolean): number {
    if (a[property] == b[property]) {
      return 0;
    }
    let rValue = 0;
    if (a[property] > b[property]) {
      rValue = 1;
    }
    else {
      rValue = -1;
    }
    if (this.reverse) {
      rValue *= -1;
    }
    return rValue;
  }
}

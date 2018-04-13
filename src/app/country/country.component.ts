import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../general.service';
import { General } from '../general';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country;  
  @Input() generals:General[]
  constructor( private route: ActivatedRoute,
    private generalService:GeneralService
  ) { }

  ngOnInit() {
    const country = this.route.snapshot.paramMap.get('Country');
    this.country = country;
    this.getbyCountry(country);
  }
  getbyCountry(country:string)
  {
    this.generalService.getbyCountry(country).subscribe(generals => this.generals = generals);
  }
}

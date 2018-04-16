import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../Services/general.service';
import { General } from '../../general';
import { reversableComparitor } from '../../utilitymethods';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { switchMap, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-generals',
  templateUrl: './generals.component.html',
  styleUrls: ['./generals.component.css']
})
export class GeneralsComponent implements OnInit {

  generals: General[];
  private reverse = false;
  private generalsSubscription:Subscription;
  private searchTerms = new Subject<string>();
  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    this.generalsSubscription= this.searchTerms.pipe(
      // wait 150ms after each keystroke before considering the term
      debounceTime(10),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.generalService.getGenerals(term)),
    ).subscribe(generals => this.generals = generals,
      (e) => { console.log(e) 
    let errorText = new HTMLParagraphElement();
    errorText.textContent = "error retreiving data";
    errorText.style.backgroundColor = "red";
    document.getElementById("main-div").appendChild(errorText)
    });
    this.searchTerms.next("");
  }
  countryClicked(): void {
    this.reverse = !this.reverse;
    this.generals.sort((a, b) => reversableComparitor(a, b, "Country", this.reverse));
  }
  nameClicked(): void {
    this.reverse = !this.reverse;
    this.generals.sort((a, b) => reversableComparitor(a, b, "Name", this.reverse));
  }
  search(term:string):void
  {
    this.searchTerms.next(term);
  }
}

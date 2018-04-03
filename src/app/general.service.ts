import { Injectable } from '@angular/core';
import { General } from './general';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GeneralService {
  private generalsURL ="http://lyndonmackay.com/php/retrieve.php"
  constructor(private http: HttpClient) { }

  getGenerals():Observable<General[]>
  {
    return this.http.get<General[]>(this.generalsURL)
  }
}

import { Injectable } from '@angular/core';
import { General } from './general';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class GeneralService {
  private generalsURL ="http://lyndonmackay.com/php/retrieve.php";
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getGeneral(name:string):Observable<General>
  {
    let nrequest = new request(requestid.getSpecificID,name);
    return this.http.post<General>(this.generalsURL,nrequest,this.httpOptions)
    .pipe( catchError(this.handleError<General>(`getGeneral id=${name}`)));
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption

  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getGenerals():Observable<General[]>
  {
    return this.http.get<General[]>(this.generalsURL);
  }
}
enum requestid
{
 getSpecificID
}
 class request{
  requestid:requestid;
  general:string;
  constructor (requestid,general)
  {
    this.requestid = requestid;
    this.general = general;
  }
}
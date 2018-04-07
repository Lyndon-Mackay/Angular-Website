import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class DateService {

  private dateURL = "http://lyndonmackay.com/php/date.php"
  constructor(private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  addDate(date :number): Observable<number>
  {
    let daterequester = new dateRequestC(date.toString(),dateRequest.add);
    console.log(JSON.stringify(daterequester));
    return this.http.post<number>(this.dateURL,daterequester,this.httpOptions).pipe(
       catchError(this.handleError<number>(`addDate date=${date}`)));
  }
  getDates():Observable<number[]>
  {
    return this.http.get<number[]>(this.dateURL);
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
}
enum dateRequest {
  add
}
class dateRequestC {
  private parameter :string
  private dateR:dateRequest

  constructor(parameter:string,dateR:dateRequest)
  {
    this.parameter = parameter;
    this.dateR = dateR;
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { customTime } from '../customtime';

import { dateRequest,dateRequestC} from "./date-service-utilities";

@Injectable()
export class DateService {

  private dateURL = "http://lyndonmackay.com/php/date.php";
  private pageSize = 25.0;
  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  addDate(date:number): Observable<customTime>
  {
    let daterequester = new dateRequestC([date.toString()],dateRequest.add);
    return this.http.post<customTime>(this.dateURL,daterequester,this.httpOptions).pipe(
       catchError(this.handleError<customTime>(`addDate date=${date}`)));
  }
  addDateToID(id:string,date:number)
  {
    let daterequester = new dateRequestC([id,date.toString()],dateRequest.addbyID);
    return this.http.post<boolean>(this.dateURL,daterequester,this.httpOptions).pipe(
      catchError(this.handleError<boolean>(`addDateToid id=${id}, date=${date}`)));
  }
  deleteDate(id:string):void{
    const url = `${this.dateURL}/${id}`;
    let daterequester = new dateRequestC([id],dateRequest.delete);
    //hacky becaus i am not sure how to handle deletes with php
    this.http.post<customTime>(this.dateURL,daterequester,this.httpOptions).subscribe();
  }

  getDateCount()
  {
    return this.http.get<number>(this.dateURL+`?id=0`);
  }
  getDates(num:number,sortedColumn = "ID",ascendedSort = true):Observable<customTime[]>
  {
    let sortNum = ascendedSort ? 1 : 0;
    return this.http.get<customTime[]>(this.dateURL+`?id=1&num=${num}&sortfield=${sortedColumn}&sortorder=${sortNum}`);
  }
  getDateByID(id:string):Observable<customTime>
  {
    let daterequester = new dateRequestC([id],dateRequest.getbyID);
    return this.http.post<customTime>(this.dateURL,daterequester,this.httpOptions).pipe(
      catchError(this.handleError<customTime>(`getDateByID ID=${id}`)));
    
  }
  updateDate(updatedTime:customTime)
  {
    return this.http.put<customTime>(this.dateURL,updatedTime
      ,this.httpOptions).pipe(
      catchError(this.handleError<customTime>(`updateDate updatedTime=${updatedTime}`)));
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

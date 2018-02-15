import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class ChartService {
  private urlData = 'api/activities';
  constructor( private http: HttpClient ) {}

  // Get Data from DataService(Json)
  getData(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.urlData)
      .pipe(
        tap( (data) => {
        }),
        catchError(this.handleError('getData', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

export interface Activity {
  zoneId: string;
  data: {
    count: number;
    speed: number;
    time: number;
  };
}

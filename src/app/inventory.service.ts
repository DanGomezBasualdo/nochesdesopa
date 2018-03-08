import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Item } from './item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class InventoryService {

  private heroesUrl = 'api/items';  // URL to web api
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  getItems (): Observable<Item[]> {
    return this.http.get<Item[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log(`Obtenido items`)),
      catchError(this.handleError('getItems', []))
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getItem(id: number): Observable<Item> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Item>(url).pipe(
      tap(_ => this.log(`Obtenido id=${id}`)),
      catchError(this.handleError<Item>(`getItem id=${id}`))
    );
  }

    /** PUT: update the hero on the server */
  updateItem (item: Item): Observable<any> {
    return this.http.put(this.heroesUrl, item, httpOptions).pipe(
      tap(_ => this.log(`actualizado id=${item.id}`)),
      catchError(this.handleError<any>('updateItem'))
    );
  }

  /** POST: add a new hero to the server */
  addItem (item: Item): Observable<Item> {
    return this.http.post<Item>(this.heroesUrl, item, httpOptions).pipe(
      tap((item: Item) => this.log(`Agregado w/ id=${item.id}`)),
      catchError(this.handleError<Item>('addItem'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteItem (item: Item | number): Observable<Item> {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Item>(url, httpOptions).pipe(
      tap(_ => this.log(`Eliminado item id=${id}`)),
      catchError(this.handleError<Item>('deleteItem'))
    );
  }

  /* GET heroes whose name contains search term */
  searchItems(term: string): Observable<Item[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Item[]>(`api/heroes/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Item[]>('searchItems', []))
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
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

}

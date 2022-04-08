import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Pokemon } from 'src/models/Pokemon';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  private handleError<T>(operation = 'operation') {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(error.error as T);
    };
  }  

  findPokemon(name: string): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(`${environment.apiUrl}/pokemon/${name}`)
      .pipe(
        tap(users => console.log('Pokemon retrieved!')),
        catchError(this.handleError<Pokemon[]>('Find Pokemon'))
      );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMovie } from '../interfaces/movie';
import { IBook } from '../interfaces/book';
import { ICharacter } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private moviesPath = '../../assets/json/movies.json';
  private booksPath = '../../assets/json/books.json';
  private charactersPath = '../../assets/json/characters.json';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<IMovie[]>{
    return this.http.get<IMovie[]>(this.moviesPath);
  }

  getBooks(): Observable<IBook[]>{
    return this.http.get<IBook[]>(this.booksPath);
  }

  getCharacters(): Observable<ICharacter[]>{
    return this.http.get<ICharacter[]>(this.charactersPath);
  }

  getMovieBySerial(serial: string): Observable<IMovie | undefined> {
    return this.http.get<IMovie[]>(this.moviesPath).pipe(
      map(movies => movies.find(movie => movie.serial == serial))
    );
  }

  getBookBySerial(serial: string): Observable<IBook | undefined> {
    return this.http.get<IBook[]>(this.booksPath).pipe(
      map(books => books.find(book => book.serial == serial))
    );
  }

  getCharById(id: string): Observable<ICharacter | undefined> {
    return this.http.get<ICharacter[]>(this.charactersPath).pipe(
      map(chars => chars.find(char => char.id == id))
    );
  }
}

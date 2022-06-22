import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map , catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http : HttpClient) { }

  getFilms():Observable<any[]>{
    return this.http.get<any[]>(`${environment.apiUrl}/movie/top_rated?sort_by=popularity.desc&language=fr-FR&api_key=${environment.apiKey}`)
    .pipe(
      tap(data=>
        console.log(data))
    )
  }

  getFilmById(id:number):Observable<any[]>{
    return this.http.get<any[]>(`${environment.apiUrl}/movie/${id}?api_key=${environment.apiKey}`)
  }
}

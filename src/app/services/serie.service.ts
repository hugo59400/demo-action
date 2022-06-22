import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from 'src/models/serie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http : HttpClient) { }

  getSeries():Observable<any[]>{
    return this.http.get<any[]>(`${environment.apiUrl}/discover/tv?api_key=${environment.apiKey}&language=fr-FR&sort_by=popularity.desc&page=1`);
  }


  getSerieById(id : number):Observable<Serie>{
    return this.http.get<Serie>(`${environment.apiUrl}/tv/${id}?api_key=${environment.apiKey}&language=fr-FR`);
  }
}

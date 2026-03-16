import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMoviesResponse } from '../models/movie.model';
import { ITvResponse } from '../models/tv.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;
  private API_KEY = environment.apiKey;

  getPopularMovies() {
    return this.http.get<IMoviesResponse>(`${this.baseUrl}/movie/popular?api_key=${this.API_KEY}`);
  }
  getTopRatedMovies() {
    return this.http.get<IMoviesResponse>(
      `${this.baseUrl}/movie/top_rated?api_key=${this.API_KEY}`,
    );
  }
  getPopularTVSeries() {
    return this.http.get<ITvResponse>(`${this.baseUrl}/tv/popular?api_key=${this.API_KEY}`);
  }
  getTopRatedTVSeries() {
    return this.http.get<ITvResponse>(`${this.baseUrl}/tv/top_rated?api_key=${this.API_KEY}`);
  }
}

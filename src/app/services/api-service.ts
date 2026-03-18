import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMoviesResponse, Movie } from '../models/movie.model';
import { ITvResponse } from '../models/tv.model';
import { environment } from '../../environments/environment.development';
import { IGenre } from '../models/genre.model';
import { map } from 'rxjs/operators';

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

  getMovieGenres() {
    return this.http
      .get<{ genres: IGenre[] }>(`${this.baseUrl}/genre/movie/list?api_key=${this.API_KEY}`)
      .pipe(map((res) => res.genres));
  }

  getSeriesGenres() {
    return this.http
      .get<{ genres: IGenre[] }>(`${this.baseUrl}/genre/tv/list?api_key=${this.API_KEY}`)
      .pipe(map((res) => res.genres));
  }

  getMovieById(id: number) {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.API_KEY}`);
  }

  getSeriesById(id: number) {
    return this.http.get(`${this.baseUrl}/tv/${id}?api_key=${this.API_KEY}`);
  }
}

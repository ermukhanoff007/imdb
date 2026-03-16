import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { AsyncPipe } from '@angular/common';
import { FilmItem } from '../film-item/film-item';

@Component({
  selector: 'app-film-list',
  imports: [AsyncPipe, FilmItem],
  templateUrl: './film-list.html',
  styleUrl: './film-list.scss',
})
export class FilmList {
  private api = inject(ApiService);
  movies$ = this.api.getPopularMovies();
}

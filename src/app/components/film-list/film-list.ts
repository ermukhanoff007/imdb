import { Component, input } from '@angular/core';
import { FilmItem } from '../film-item/film-item';
import { IMoviesResponse } from '../../models/movie.model';

@Component({
  selector: 'app-film-list',
  imports: [FilmItem],
  templateUrl: './film-list.html',
  styleUrl: './film-list.scss',
})
export class FilmList {
  moviesResponce = input.required<IMoviesResponse>();
}

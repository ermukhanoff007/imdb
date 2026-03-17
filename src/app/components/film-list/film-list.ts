import { Component, input } from '@angular/core';
import { FilmItem } from '../film-item/film-item';
import { IMovie } from '../../models/movie.model';

@Component({
  selector: 'app-film-list',
  imports: [FilmItem],
  templateUrl: './film-list.html',
  styleUrl: './film-list.scss',
})
export class FilmList {
  movies = input.required<IMovie[]>();
}

import { Component, input } from '@angular/core';
import { IMovie } from '../../models/movie.model';

@Component({
  selector: 'app-film-item',
  imports: [],
  templateUrl: './film-item.html',
  styleUrl: './film-item.scss',
})
export class FilmItem {
  movie = input.required<IMovie>();
}

import { Component, input } from '@angular/core';
import { IMovie } from '../../models/movie.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-film-item',
  imports: [DatePipe],
  templateUrl: './film-item.html',
  styleUrl: './film-item.scss',
})
export class FilmItem {
  movie = input.required<IMovie>();
}

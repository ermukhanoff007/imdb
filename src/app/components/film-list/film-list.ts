import { Component, input } from '@angular/core';
import { FilmItem } from '../film-item/film-item';
import { IMovie } from '../../models/movie.model';
import { DataViewModule } from 'primeng/dataview';

@Component({
  selector: 'app-film-list',
  imports: [FilmItem, DataViewModule],
  templateUrl: './film-list.html',
  styleUrl: './film-list.scss',
  standalone: true,
})
export class FilmList {
  movies = input.required<IMovie[]>();
}

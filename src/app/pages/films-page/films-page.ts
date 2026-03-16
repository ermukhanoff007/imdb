import { Component } from '@angular/core';
import { FilmList } from '../../components/film-list/film-list';

@Component({
  selector: 'app-films-page',
  imports: [FilmList],
  templateUrl: './films-page.html',
  styleUrl: './films-page.scss',
})
export class FilmsPage {}

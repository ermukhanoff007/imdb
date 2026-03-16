import { Component } from '@angular/core';
import { FilmList } from '../../components/film-list/film-list';
import { FilterComponent } from '../../components/filter-component/filter-component';

@Component({
  selector: 'app-films-page',
  imports: [FilmList, FilterComponent],
  templateUrl: './films-page.html',
  styleUrl: './films-page.scss',
})
export class FilmsPage {}

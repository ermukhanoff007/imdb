import { Component, inject, OnInit, signal } from '@angular/core';
import { FilmList } from '../../components/film-list/film-list';
import { FilterComponent } from '../../components/filter-component/filter-component';
import { Router } from '@angular/router';

import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectFilteredMovies } from '../../store/movies/movies.selector';
import { loadMovies, loadTopMovies, resetFilter } from '../../store/movies/movies.action';
import { MoviesStoreService } from '../../signalStore/movies/movies.signal.store';

@Component({
  selector: 'app-films-page',
  imports: [FilmList, FilterComponent, AsyncPipe],
  templateUrl: './films-page.html',
  styleUrl: './films-page.scss',
})
export class FilmsPage implements OnInit {
  private router = inject(Router);
  private store = inject(MoviesStoreService);

  title = signal<string>('');

  movies$ = this.store.select(selectFilteredMovies);

  ngOnInit(): void {
    const url = this.router.url;

    this.store.dispatch(resetFilter());

    if (url.includes('top-rate')) {
      this.title.set('Top Films');
      this.store.dispatch(loadTopMovies());
    } else {
      this.title.set('Popular Films');
      this.store.dispatch(loadMovies());
    }
  }
}

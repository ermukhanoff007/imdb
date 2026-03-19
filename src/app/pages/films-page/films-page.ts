import { Component, inject, OnInit, signal } from '@angular/core';
import { FilmList } from '../../components/film-list/film-list';
import { FilterComponent } from '../../components/filter-component/filter-component';
import { Router } from '@angular/router';
import { MoviesStore } from '../../signalStore/movies/movies.signal.store';

@Component({
  selector: 'app-films-page',
  imports: [FilmList, FilterComponent],
  templateUrl: './films-page.html',
  styleUrl: './films-page.scss',
})
export class FilmsPage implements OnInit {
  private router = inject(Router);
  private store = inject(MoviesStore);

  title = signal<string>('');

  movies = this.store.filteredMovies;

  ngOnInit(): void {
    const url = this.router.url;

    if (url.includes('top-rate')) {
      this.title.set('Top Films');
      this.store.loadMovies('top-rated');
    } else {
      this.title.set('Popular Films');
      this.store.loadMovies('popular');
    }
  }
}

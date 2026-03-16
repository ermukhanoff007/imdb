import { Component, inject, OnInit, signal } from '@angular/core';
import { FilmList } from '../../components/film-list/film-list';
import { FilterComponent } from '../../components/filter-component/filter-component';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api-service';
import { of } from 'rxjs';
import { IMoviesResponse } from '../../models/movie.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-films-page',
  imports: [FilmList, FilterComponent, AsyncPipe],
  templateUrl: './films-page.html',
  styleUrl: './films-page.scss',
})
export class FilmsPage implements OnInit {
  private router = inject(Router);
  private api = inject(ApiService);
  movies$ = of<IMoviesResponse>({ results: [], total_results: 0, page: 1, total_pages: 1 });

  title = signal<string>('');

  ngOnInit(): void {
    const url = this.router.url;
    if (url.includes('top-rate')) {
      this.title.set('Top Films');
      this.movies$ = this.api.getTopRatedMovies();
    } else {
      this.title.set('Popular Films');
      this.movies$ = this.api.getPopularMovies();
    }
  }
}

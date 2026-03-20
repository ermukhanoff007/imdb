import { Component, inject, OnInit, signal } from '@angular/core';
import { FilmList } from '../../components/film-list/film-list';
import { FilterComponent } from '../../components/filter-component/filter-component';
import { Router } from '@angular/router';
import { MoviesStore } from '../../signalStore/movies/movies.signal.store';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-films-page',
  imports: [FilmList, FilterComponent, IconField, InputIcon, ReactiveFormsModule],
  templateUrl: './films-page.html',
  styleUrl: './films-page.scss',
  standalone: true,
})
export class FilmsPage implements OnInit {
  private router = inject(Router);
  private store = inject(MoviesStore);

  title = signal<string>('');

  movies = this.store.filteredMovies;

  searchControl = new FormControl('');

  ngOnInit(): void {
    const url = this.router.url;

    if (url.includes('top-rate')) {
      this.title.set('Top Films');
      this.store.loadMovies('top-rated');
    } else {
      this.title.set('Popular Films');
      this.store.loadMovies('popular');
    }
    this.searchControl.valueChanges.subscribe((value) => {
      this.store.setFilter({ search: value || '' });
    });
  }
}

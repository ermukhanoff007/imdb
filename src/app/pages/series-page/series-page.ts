import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { SeriesList } from '../../components/series-list/series-list';
import { FilterSeriesComponent } from '../../components/filter-series-component/filter-series-component';
import { TvSeriesStore } from '../../signalStore/series/series.signal.store';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-films-page',
  imports: [SeriesList, FilterSeriesComponent, IconField, InputIcon, ReactiveFormsModule],
  templateUrl: './series-page.html',
  styleUrl: './series-page.scss',
  standalone: true,
})
export class SeriesPage implements OnInit {
  private router = inject(Router);
  private store = inject(TvSeriesStore);

  title = signal<string>('');

  series = this.store.filteredSeries;
  isLoading = this.store.loading;

  searchControl = new FormControl('');

  ngOnInit(): void {
    const url = this.router.url;

    if (url.includes('top-rate')) {
      this.title.set('Top Series');
      this.store.loadSeries('top-rated');
    } else {
      this.title.set('Popular Series');
      this.store.loadSeries('popular');
    }

    this.searchControl.valueChanges.subscribe((value) => {
      this.store.setFilter({ search: value || '' });
    });
  }
}

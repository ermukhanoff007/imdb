import { Component, inject, OnInit, signal } from '@angular/core';
import { FilterComponent } from '../../components/filter-component/filter-component';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api-service';
import { of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ITvResponse } from '../../models/tv.model';
import { SeriesList } from '../../components/series-list/series-list';

@Component({
  selector: 'app-films-page',
  imports: [FilterComponent, AsyncPipe, SeriesList],
  templateUrl: './series-page.html',
  styleUrl: './series-page.scss',
})
export class SeriesPage implements OnInit {
  private router = inject(Router);
  private api = inject(ApiService);
  series$ = of<ITvResponse>({ results: [], total_results: 0, page: 1, total_pages: 1 });

  title = signal<string>('');

  ngOnInit(): void {
    const url = this.router.url;
    if (url.includes('top-rate')) {
      this.title.set('Top Series');
      this.series$ = this.api.getTopRatedTVSeries();
    } else {
      this.title.set('Popular Series');
      this.series$ = this.api.getPopularTVSeries();
    }
  }
}

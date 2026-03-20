import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IGenre } from '../../models/genre.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api-service';
import { TvSeriesStore } from '../../signalStore/series/series.signal.store';
import { InputNumber } from 'primeng/inputnumber';
import { SelectButton } from 'primeng/selectbutton';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-filter-series-component',
  imports: [ReactiveFormsModule, InputNumber, SelectButton],
  templateUrl: './filter-series-component.html',
  styleUrl: './filter-series-component.scss',
  standalone: true,
})
export class FilterSeriesComponent implements OnInit {
  genres$!: Observable<IGenre[]>;
  filterForm!: FormGroup;
  genreOptions: { id: number; name: string }[] = [];

  private api = inject(ApiService);
  private fb = inject(FormBuilder);
  private store = inject(TvSeriesStore);

  ngOnInit() {
    this.genres$ = this.api.getSeriesGenres();
    this.genres$
      .pipe(map((genres) => genres.map((g) => ({ id: g.id, name: g.name }))))
      .subscribe((options) => {
        this.genreOptions = options;
      });

    this.filterForm = this.fb.group({
      genreIds: [[]],
      voteMin: [0],
      voteMax: [10],
    });

    this.filterForm.valueChanges.subscribe((value) => {
      this.store.setFilter({
        genreIds: value.genreIds,
        voteRange: [value.voteMin, value.voteMax],
      });
    });
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IGenre } from '../../models/genre.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api-service';
import { AsyncPipe } from '@angular/common';
import { TvSeriesStore } from '../../signalStore/series/series.signal.store';

@Component({
  selector: 'app-filter-series-component',
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './filter-series-component.html',
  styleUrl: './filter-series-component.scss',
})
export class FilterSeriesComponent implements OnInit {
  genres$!: Observable<IGenre[]>;
  filterForm!: FormGroup;
  private api = inject(ApiService);
  private fb = inject(FormBuilder);
  private store = inject(TvSeriesStore);

  ngOnInit() {
    this.genres$ = this.api.getSeriesGenres();

    this.filterForm = this.fb.group({
      genreIds: [[]],
      voteMin: [0],
      voteMax: [10],
    });

    this.filterForm.valueChanges.subscribe((value) => {
      this.store.setFilter({
        genreIds: value.genreIds,
        voteRange: [value.voteMin, value.voteMsx],
      });
    });
  }
  toggleGenre(id: number) {
    const control = this.filterForm.get('genreIds');
    const current: number[] = control?.value || [];

    if (current.includes(id)) {
      control?.setValue(current.filter((g) => g !== id));
    } else {
      control?.setValue([...current, id]);
    }
  }

  isGenreSelected(id: number): boolean {
    const current: number[] = this.filterForm.get('genreIds')?.value || [];
    return current.includes(id);
  }
}

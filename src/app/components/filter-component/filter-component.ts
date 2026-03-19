import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { IGenre } from '../../models/genre.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MoviesStore } from '../../signalStore/movies/movies.signal.store';

@Component({
  selector: 'app-filter-component',
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './filter-component.html',
  styleUrls: ['./filter-component.scss'],
})
export class FilterComponent implements OnInit {
  genres$!: Observable<IGenre[]>;
  filterForm!: FormGroup;
  private api = inject(ApiService);
  private fb = inject(FormBuilder);
  private store = inject(MoviesStore);

  ngOnInit() {
    this.genres$ = this.api.getMovieGenres();

    this.filterForm = this.fb.group({
      genreIds: [[]],
      adult: [null],
      voteMin: [0],
      voteMax: [10],
    });

    this.filterForm.valueChanges.subscribe((value) => {
      this.store.setFilter({
        genreIds: value.genreIds,
        adult: value.adult,
        voteRange: [value.voteMin, value.voteMax],
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

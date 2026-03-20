import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { IGenre } from '../../models/genre.model';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MoviesStore } from '../../signalStore/movies/movies.signal.store';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Select } from 'primeng/select';
import { InputNumber } from 'primeng/inputnumber';

@Component({
  selector: 'app-filter-component',
  imports: [ReactiveFormsModule, SelectButtonModule, FormsModule, Select, InputNumber],
  templateUrl: './filter-component.html',
  styleUrls: ['./filter-component.scss'],
  standalone: true,
})
export class FilterComponent implements OnInit {
  genres$!: Observable<IGenre[]>;
  genreOptions: { id: number; name: string }[] = [];
  filterForm!: FormGroup;
  adultOptions = [
    { label: 'Adult', value: true },
    { label: 'Not Adult', value: false },
  ];

  private api = inject(ApiService);
  private fb = inject(FormBuilder);
  private store = inject(MoviesStore);

  ngOnInit() {
    this.genres$ = this.api.getMovieGenres();
    this.genres$
      .pipe(map((genres) => genres.map((g) => ({ id: g.id, name: g.name }))))
      .subscribe((options) => {
        this.genreOptions = options;
      });

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
}

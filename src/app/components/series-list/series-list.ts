import { Component, input } from '@angular/core';
import { ITvShow } from '../../models/tv.model';
import { SeriesItem } from '../series-item/series-item';
import { DataViewModule } from 'primeng/dataview';

@Component({
  selector: 'app-series-list',
  imports: [SeriesItem, DataViewModule],
  templateUrl: './series-list.html',
  styleUrl: './series-list.scss',
  standalone: true,
})
export class SeriesList {
  series = input.required<ITvShow[]>();
}

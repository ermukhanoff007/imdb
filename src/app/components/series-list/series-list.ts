import { Component, input } from '@angular/core';
import { ITvResponse } from '../../models/tv.model';
import { SeriesItem } from '../series-item/series-item';

@Component({
  selector: 'app-series-list',
  imports: [SeriesItem],
  templateUrl: './series-list.html',
  styleUrl: './series-list.scss',
})
export class SeriesList {
  seriesResponce = input.required<ITvResponse>();
}

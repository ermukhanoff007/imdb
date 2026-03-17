import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ITvShow } from '../../models/tv.model';

@Component({
  selector: 'app-series-item',
  imports: [DatePipe],
  templateUrl: './series-item.html',
  styleUrl: './series-item.scss',
})
export class SeriesItem {
  series = input.required<ITvShow>();
}

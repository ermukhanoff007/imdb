import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ITvShow } from '../../models/tv.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series-item',
  imports: [DatePipe],
  templateUrl: './series-item.html',
  styleUrl: './series-item.scss',
})
export class SeriesItem {
  series = input.required<ITvShow>();
  private route = inject(Router);

  goToCard() {
    const id = this.series().id;
    this.route.navigate([`/series/${id}`]);
  }
}

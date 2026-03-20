import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ITvShow } from '../../models/tv.model';
import { Router } from '@angular/router';
import { Skeleton } from 'primeng/skeleton';

@Component({
  selector: 'app-series-item',
  imports: [DatePipe, Skeleton],
  templateUrl: './series-item.html',
  styleUrl: './series-item.scss',
  standalone: true,
})
export class SeriesItem {
  series = input.required<ITvShow>();
  loading = input.required<boolean>();
  private route = inject(Router);

  goToCard() {
    const id = this.series().id;
    this.route.navigate([`/series/${id}`]);
  }
}

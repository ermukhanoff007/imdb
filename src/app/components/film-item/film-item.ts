import { Component, inject, input } from '@angular/core';
import { IMovie } from '../../models/movie.model';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-item',
  imports: [DatePipe],
  templateUrl: './film-item.html',
  styleUrl: './film-item.scss',
})
export class FilmItem {
  movie = input.required<IMovie>();
  private router = inject(Router);

  goToCard() {
    const id = this.movie().id;
    this.router.navigate([`/films/${id}`]);
  }
}

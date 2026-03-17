import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api-service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard implements OnInit {
  private route = inject(ActivatedRoute);
  private api = inject(ApiService);
  movie = signal<Movie | null>(null);

  filmId = signal<number | null>(null);

  ngOnInit() {
    this.filmId.set(
      this.route.snapshot.paramMap.get('id')
        ? Number(this.route.snapshot.paramMap.get('id'))
        : null,
    );
    if (this.filmId()) {
      this.api.getMovieById(this.filmId()!).subscribe((data) => {
        this.movie.set(data);
      });
    }
  }
}

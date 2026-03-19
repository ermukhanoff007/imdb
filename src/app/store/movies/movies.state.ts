import { IMovie } from '../../models/movie.model';
export interface MoviesState {
  movies: IMovie[];
  filter: MovieFilter;
  loading: boolean;
}

export interface MovieFilter {
  search: string;
  genreIds: number[];
  adult: boolean | null;
  voteRange: [number, number];
}

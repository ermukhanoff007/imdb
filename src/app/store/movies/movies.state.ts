import { IMovie } from '../../models/movie.model';
export interface MoviesState {
  movies: IMovie[];
  filter: { search: string };
  loading: boolean;
}

export const initialState: MoviesState = {
  movies: [],
  filter: { search: '' },
  loading: false,
};

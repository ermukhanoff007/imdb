import { IMovie } from '../../models/movie.model';
export interface MoviesState {
  movies: IMovie[];
  filter: {
    search: string;
    genreIds: number[];
    adult: boolean | null;
    voteRange: [number, number];
  };
  loading: boolean;
}

export const initialState: MoviesState = {
  movies: [],
  filter: { search: '', genreIds: [], adult: null, voteRange: [0, 10] },
  loading: false,
};

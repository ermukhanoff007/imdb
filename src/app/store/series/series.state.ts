import { ITvShow } from '../../models/tv.model';

export interface TvState {
  tvShows: ITvShow[];
  filter: {
    search: string;
    genreIds: number[];
    voteRange: [number, number];
  };
  loading: boolean;
}

export const initialState: TvState = {
  tvShows: [],
  filter: { search: '', genreIds: [], voteRange: [0, 10] },
  loading: false,
};

import { ITvShow } from '../../models/tv.model';

export interface TvState {
  tvShows: ITvShow[];
  filter: { search: string };
  loading: boolean;
}

export const initialState: TvState = {
  tvShows: [],
  filter: { search: '' },
  loading: false,
};

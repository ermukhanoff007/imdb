import { ITvShow } from '../../models/tv.model';

export interface TvState {
  tvShows: ITvShow[];
  filter: TVSeriesFilter;
  loading: boolean;
}

export interface TVSeriesFilter {
  search: string;
  genreIds: number[];
  voteRange: [number, number];
}

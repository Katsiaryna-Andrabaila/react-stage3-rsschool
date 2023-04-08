import { RefObject } from 'react';

export type TCard = {
  id: number;
  title: string;
  description: string;
  country: string;
  weigth: string;
  height: string;
  life: string;
  breedingTime: string;
  thumbnail: string;
};

export type TRefs = {
  formRef: RefObject<HTMLFormElement>;
  nameRef: RefObject<HTMLInputElement>;
  birthRef: RefObject<HTMLInputElement>;
  hairRef: RefObject<HTMLSelectElement>;
  maleRef: RefObject<HTMLInputElement>;
  femaleRef: RefObject<HTMLInputElement>;
  pictureRef: RefObject<HTMLInputElement>;
  dryFeedRef: RefObject<HTMLInputElement>;
  naturalFeedRef: RefObject<HTMLInputElement>;
};

export type FormCard = {
  id: number;
  name: string;
  birth: string;
  hair: string;
  gender: string;
  picture: File;
  feed: string[];
};

export type SubmitData = {
  name: string;
  birth: string;
  hair: string;
  gender: string;
  picture: FileList;
  feed: string[];
};

export type BestMovie = {
  id: string;
  title: string;
  fullTitle: string;
  year: string;
  crew: string;
  image: string;
  rank: string;
  rankUpDown: string;
  imDbRating: string;
  imDbRatingCount: string;
};

export type FoundMovie = {
  id: string;
  title: string;
  description: string;
  image: string;
  resultType: string;
};

type Actor = {
  id: string;
  name: string;
  image: string;
  asCharacter: string;
};

type Company = Omit<Actor, 'image' | 'asCharacter'>;

type Similar = {
  id: string;
  title: string;
  image: string;
  imDbRating: string;
};

type BoxOffice = {
  budget: string;
  openingWeekendUSA: string;
  grossUSA: string;
  cumulativeWorldwideGross: string;
};

type KeyValue = {
  key: string;
  value: string;
};

export type Movie = {
  id: string;
  title: string;
  fullTitle?: string;
  year?: string;
  image?: string;
  actorList?: Actor[];
  awards?: string;
  boxOffice?: BoxOffice;
  companies?: string;
  companyList?: Company[];
  contentRating?: string | null;
  countries?: string;
  countryList?: KeyValue[];
  directorList?: Company[];
  directors?: string;
  errorMessage?: string;
  fullCast?: string | null;
  genreList?: KeyValue[];
  genres?: string;
  imDbRating?: string;
  imDbRatingVotes?: string;
  images?: string[];
  keywordList?: string[];
  keywords?: string;
  languageList?: KeyValue[];
  languages?: string;
  metacriticRating?: string | null;
  originalTitle?: string;
  plot?: string;
  plotLocal?: string;
  plotLocalIsRtl?: boolean;
  posters?: string | null;
  ratings?: string | null;
  releaseDate?: string | null;
  runtimeMins?: string | null;
  runtimeStr?: string | null;
  similars?: Similar[];
  starList?: Company[];
  stars?: string;
  tagline?: string | null;
  trailer?: string | null;
  tvEpisodeInfo?: string | null;
  tvSeriesInfo?: string | null;
  type?: string;
  wikipedia?: string | null;
  writerList?: Company[];
  writers?: string;
};

type Thumbnail = {
  alt_text: string;
  lqip: string;
  height: number;
  width: number;
};

export type FoundItem = {
  id: number;
  title: string;
  api_link: string;
  thumbnail: Thumbnail;
  is_boosted: boolean;
  api_model: string;
  timestamp: string;
  _score: number;
};

export type Item = {
  id: number;
  title: string;
  api_link?: string;
  thumbnail?: Thumbnail;
  is_boosted?: boolean;
  api_model?: string;
  timestamp?: string;
  image_id?: string;
  date_display?: string;
  date_end?: string;
  artist_display?: string;
  credit_line?: string;
  copyright_notice?: string;
  gallery_title?: string;
  medium_display?: string;
};

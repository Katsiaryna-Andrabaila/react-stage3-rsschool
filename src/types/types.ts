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

export type FormCard = {
  id: number;
  name: string;
  birth: string;
  hair: string;
  gender: string;
  picture: string;
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

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

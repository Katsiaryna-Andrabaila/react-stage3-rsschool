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
  genderRef: RefObject<HTMLInputElement>;
  pictureRef: RefObject<HTMLInputElement>;
  submitRef: RefObject<HTMLButtonElement>;
};

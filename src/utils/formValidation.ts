import { FORM_PAGE_TITLES } from '../constants/constants';

export const validateName = (name: string | undefined) => {
  const regularExpression = /^[a-zA-Z]{3,}$/;
  return name ? regularExpression.test(name) : false;
};

export const validateDate = (date: string | undefined) =>
  date ? new Date(date) <= new Date() : false;

export const validateHair = (hair: string | undefined) => {
  return (
    hair === FORM_PAGE_TITLES.long ||
    hair === FORM_PAGE_TITLES.middle ||
    hair === FORM_PAGE_TITLES.short ||
    hair === FORM_PAGE_TITLES.hairless
  );
};

export const validateGender = (male: boolean | undefined, female: boolean | undefined) =>
  male || female;

export const validatePicture = (path: File | undefined) => {
  if (path) {
    const ext = path.name.split('.').reverse()[0];
    return ext === 'jpg' || ext === 'jpeg' || ext === 'png' || ext === 'gif';
  } else {
    return false;
  }
};

export const validateFeed = (dryFeed: boolean | undefined, naturalFeed: boolean | undefined) =>
  dryFeed || naturalFeed;

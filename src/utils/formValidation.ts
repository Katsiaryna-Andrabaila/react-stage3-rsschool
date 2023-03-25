import { FORM_PAGE_TITLES } from 'constants/constants';

export const validateName = (name: string) => {
  const regularExpression = /^[a-zA-Z]{3,}$/;
  return regularExpression.test(name);
};

export const validateDate = (date: Date) => date <= new Date();

export const validateHair = (hair: string) => {
  return (
    hair === FORM_PAGE_TITLES.long ||
    hair === FORM_PAGE_TITLES.middle ||
    hair === FORM_PAGE_TITLES.short ||
    hair === FORM_PAGE_TITLES.hairless
  );
};

export const validateGender = (male: boolean, female: boolean) => male || female;

export const validatePicture = (path: File) => {
  const ext = path.name.split('.').reverse()[0];
  return ext === 'jpg' || ext === 'jpeg' || ext === 'png' || ext === 'gif';
};

export const validateFeed = (dryFeed: boolean, naturalFeed: boolean) => dryFeed || naturalFeed;

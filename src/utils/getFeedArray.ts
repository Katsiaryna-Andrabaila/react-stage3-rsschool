import { FORM_PAGE_TITLES } from '../constants/constants';

const getFeedArray = (dryFeed: boolean | undefined, naturalFeed: boolean | undefined): string[] => {
  const feedArray: string[] = [];

  if (dryFeed && !naturalFeed) {
    feedArray.push(FORM_PAGE_TITLES.dry);
  } else if (!dryFeed && naturalFeed) {
    feedArray.push(FORM_PAGE_TITLES.natural);
  } else if (dryFeed && naturalFeed) {
    feedArray.push(FORM_PAGE_TITLES.dry, FORM_PAGE_TITLES.natural);
  }

  return feedArray;
};

export default getFeedArray;

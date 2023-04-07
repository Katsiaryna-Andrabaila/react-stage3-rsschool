import { URL } from '../constants/constants';

export const searchItems = async (query: string) => {
  try {
    const response = await fetch(`${URL.search}${query}`, {
      method: 'GET',
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

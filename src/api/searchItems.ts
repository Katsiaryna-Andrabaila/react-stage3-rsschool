import { URL } from '../constants/constants';

export const searchItems = async (query: string) => {
  try {
    const response = await fetch(`${URL}/search?q=${query}&limit=100&page=1`, {
      method: 'GET',
    });
    return (await response.json()).data;
  } catch (err) {
    console.log(err);
  }
};

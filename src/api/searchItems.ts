import { URL } from '../constants/constants';

export const searchItems = async (query: string) => {
  try {
    const response = await fetch(`${URL}/search?q=${query}`, {
      method: 'GET',
    });
    return (await response.json()).data;
  } catch (err) {
    console.log(err);
  }
};

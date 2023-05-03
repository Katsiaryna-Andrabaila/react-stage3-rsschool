import { URL } from '../constants/constants';

export const getItems = async () => {
  try {
    const response = await fetch(`${URL}?page=1&limit=100`, {
      method: 'GET',
    });
    return (await response.json()).data;
  } catch (err) {
    console.log(err);
  }
};

import { URL } from '../constants/constants';

export const getItems = async () => {
  try {
    const response = await fetch(URL.general, {
      method: 'GET',
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

import { URL } from '../constants/constants';

export const getItems = async () => {
  try {
    const response = await fetch(URL, {
      method: 'GET',
    });
    return (await response.json()).data;
  } catch (err) {
    console.log(err);
  }
};

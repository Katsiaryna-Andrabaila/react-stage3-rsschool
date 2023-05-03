import { URL } from '../constants/constants';

export const getItemById = async (id: number) => {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: 'GET',
    });
    return (await response.json()).data;
  } catch (err) {
    console.log(err);
  }
};

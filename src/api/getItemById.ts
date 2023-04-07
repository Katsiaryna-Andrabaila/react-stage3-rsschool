import { URL } from '../constants/constants';

export const getItems = async (id: string) => {
  try {
    const response = await fetch(`${URL.byID}${id}`, {
      method: 'GET',
    });
    if (response.status !== 200) {
      throw { ...(await response.json()) }.message;
    }
    console.log(await response.json());
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

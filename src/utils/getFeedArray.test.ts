/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import getFeedArray from './getFeedArray';
import { FORM_PAGE_TITLES } from '../constants/constants';

describe('Given boolean or undefined items', () => {
  test('Then I expect the result array to be empty', () => {
    const result = getFeedArray(undefined, undefined);
    const expectedResult: string[] = [];

    expect(result).toEqual(expectedResult);
  });

  test('Then I expect the result array contain only one string item', () => {
    const result = getFeedArray(undefined, true);
    const expectedResult: string[] = [FORM_PAGE_TITLES.natural];

    expect(result).toEqual(expectedResult);
  });

  test('Then I expect the result array contain only one string item', () => {
    const result = getFeedArray(true, false);
    const expectedResult: string[] = [FORM_PAGE_TITLES.dry];

    expect(result).toEqual(expectedResult);
  });

  test('Then I expect the result array contain two string items', () => {
    const result = getFeedArray(true, true);
    const expectedResult: string[] = [FORM_PAGE_TITLES.dry, FORM_PAGE_TITLES.natural];

    expect(result).toEqual(expectedResult);
  });
});

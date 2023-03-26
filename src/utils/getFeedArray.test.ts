/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import getFeedArray from './getFeedArray';
import { FORM_PAGE_TITLES } from '../constants/constants';

describe('getFeedArray', () => {
  describe('when given two undefined items', () => {
    test('should return the empty result array', () => {
      const result = getFeedArray(undefined, undefined);
      const expectedResult: string[] = [];

      expect(result).toEqual(expectedResult);
    });
  });

  describe('when given one undefined & one boolean (true) items', () => {
    test('should return the result array with one string item', () => {
      const result = getFeedArray(undefined, true);
      const expectedResult: string[] = [FORM_PAGE_TITLES.natural];

      expect(result).toEqual(expectedResult);
    });
  });

  describe('when given one boolean (true) & one undefined items', () => {
    test('should return the result array with one string item', () => {
      const result = getFeedArray(true, false);
      const expectedResult: string[] = [FORM_PAGE_TITLES.dry];

      expect(result).toEqual(expectedResult);
    });
  });

  describe('when given two boolean (true) items', () => {
    test('should return the result array with two string items', () => {
      const result = getFeedArray(true, true);
      const expectedResult: string[] = [FORM_PAGE_TITLES.dry, FORM_PAGE_TITLES.natural];

      expect(result).toEqual(expectedResult);
    });
  });
});

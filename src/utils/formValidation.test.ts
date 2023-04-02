/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import {
  validateName,
  validateDate,
  validateHair,
  validateGender,
  validatePicture,
  validateFeed,
} from './formValidation';

describe('validateName', () => {
  test('should return true when name is in correct format', () => {
    const result = validateName('Test');

    expect(result).toEqual(true);
  });
});

describe('validateDate', () => {
  test('should return true when the data is less than today', () => {
    const result = validateDate('2023-03-01');

    expect(result).toEqual(true);
  });
});

describe('validateHair', () => {
  test('should return true when hair is in correct format', () => {
    const result = validateHair('long');

    expect(result).toEqual(true);
  });
});

describe('validateGender', () => {
  test('should return true when gender is checked', () => {
    const result = validateGender(true, undefined);

    expect(result).toEqual(true);
  });
});

/* describe('validatePicture', () => {
  describe('when file extension is correct', () => {
    test('should return true', () => {
      const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' });
      const result = validatePicture(file);

      expect(result).toEqual(true);
    });
  }); */

/* describe('when file extension is incorrect', () => {
    test('should return false', () => {
      const file = new File(['test'], 'test.pdf', { type: 'image/pdf' });
      const result = validatePicture(file);

      expect(result).toEqual(false);
    });
  });
}); */

describe('validateFeed', () => {
  test('should return true when feed is checked', () => {
    const result = validateFeed(true, undefined);

    expect(result).toEqual(true);
  });
});

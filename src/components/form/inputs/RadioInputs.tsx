import React from 'react';
import { FORM_ERRORS, FORM_PAGE_TITLES } from '../../../constants/constants';

const RadioInputs = (props: {
  maleRef: React.RefObject<HTMLInputElement>;
  femaleRef: React.RefObject<HTMLInputElement>;
  genderError: string;
}) => {
  const { maleRef, femaleRef, genderError } = props;
  return (
    <div className="input-wrapper">
      <div className="input-label">
        <label className="radio-label">
          <input type="radio" name="gender" ref={maleRef} />
          <span>{FORM_PAGE_TITLES.male}</span>
        </label>
        <label className="radio-label">
          <input type="radio" name="gender" ref={femaleRef} />
          <span>{FORM_PAGE_TITLES.female}</span>
        </label>
      </div>
      {genderError && <p className="form-error">{FORM_ERRORS.genderError}</p>}
    </div>
  );
};

export default RadioInputs;

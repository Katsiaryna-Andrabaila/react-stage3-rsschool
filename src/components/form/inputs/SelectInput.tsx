import React from 'react';
import { FORM_ERRORS, FORM_PAGE_TITLES } from '../../../constants/constants';

const SelectInput = (props: { hairRef: React.RefObject<HTMLSelectElement>; hairError: string }) => {
  const { hairRef, hairError } = props;
  return (
    <div className="input-wrapper">
      <label className="label">
        {FORM_PAGE_TITLES.hairLength}
        <select ref={hairRef} className="input">
          <option></option>
          <option>{FORM_PAGE_TITLES.long}</option>
          <option>{FORM_PAGE_TITLES.middle}</option>
          <option>{FORM_PAGE_TITLES.short}</option>
          <option>{FORM_PAGE_TITLES.hairless}</option>
        </select>
      </label>
      {hairError && <p className="form-error">{FORM_ERRORS.hairError}</p>}
    </div>
  );
};

export default SelectInput;

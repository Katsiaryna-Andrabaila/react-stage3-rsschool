import React from 'react';
import { FORM_ERRORS, FORM_PAGE_TITLES } from '../../../constants/constants';

const DateInput = (props: { dateRef: React.RefObject<HTMLInputElement>; dateError: string }) => {
  const { dateRef, dateError } = props;
  return (
    <div className="input-wrapper">
      <label className="label">
        {FORM_PAGE_TITLES.birthDate}
        <input type="date" ref={dateRef} className="input" />
      </label>
      {dateError && <p className="form-error">{FORM_ERRORS.birthError}</p>}
    </div>
  );
};

export default DateInput;

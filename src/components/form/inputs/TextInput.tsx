import React from 'react';
import { FORM_ERRORS, FORM_PAGE_TITLES } from '../../../constants/constants';

const TextInput = (props: { nameRef: React.RefObject<HTMLInputElement>; nameError: string }) => {
  const { nameRef, nameError } = props;
  return (
    <div className="input-wrapper">
      <label className="label">
        {FORM_PAGE_TITLES.petName}
        <input type="text" ref={nameRef} className="input" data-testid="name-input" />
      </label>
      {nameError && <p className="form-error">{FORM_ERRORS.nameError}</p>}
    </div>
  );
};

export default TextInput;

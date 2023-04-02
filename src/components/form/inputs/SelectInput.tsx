import React from 'react';
import { FORM_ERRORS, FORM_PAGE_TITLES } from '../../../constants/constants';
import { Path, UseFormRegister } from 'react-hook-form';
import { SubmitData } from 'types/types';

type Props = {
  register: UseFormRegister<SubmitData>;
  hair: Path<{ hair: string }>;
  hairError: string | undefined;
};

const SelectInput = ({ register, hair, hairError }: Props) => {
  return (
    <div className="input-wrapper">
      <label className="label">
        {FORM_PAGE_TITLES.hairLength}
        <select
          {...register(hair, {
            required: FORM_ERRORS.hairError,
          })}
          className="input"
        >
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

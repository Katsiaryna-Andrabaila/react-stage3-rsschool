import React from 'react';
import { FORM_ERRORS, FORM_PAGE_TITLES } from '../../../constants/constants';
import { Path, UseFormRegister } from 'react-hook-form';
import { SubmitData } from 'types/types';

type Props = {
  register: UseFormRegister<SubmitData>;
  gender: Path<{ gender: string }>;
  genderError: string | undefined;
};

const RadioInputs = ({ register, gender, genderError }: Props) => {
  return (
    <div className="input-wrapper">
      <div className="input-label">
        <label className="radio-label">
          <input
            type="radio"
            {...register(gender, {
              required: FORM_ERRORS.genderError,
            })}
            value="male"
          />
          <span>{FORM_PAGE_TITLES.male}</span>
        </label>
        <label className="radio-label">
          <input
            type="radio"
            {...register(gender, {
              required: FORM_ERRORS.genderError,
            })}
            value="female"
          />
          <span>{FORM_PAGE_TITLES.female}</span>
        </label>
      </div>
      {genderError && <p className="form-error">{FORM_ERRORS.genderError}</p>}
    </div>
  );
};

export default RadioInputs;

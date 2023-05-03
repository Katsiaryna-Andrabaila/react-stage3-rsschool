import React from 'react';
import { FORM_ERRORS, FORM_PAGE_TITLES } from '../../../constants/constants';
import { Path, UseFormRegister } from 'react-hook-form';
import { SubmitData } from '../../../types/types';
import { validateDate } from '../../../utils/formValidation';

type Props = {
  register: UseFormRegister<SubmitData>;
  birth: Path<{ birth: string }>;
  birthError: string | undefined;
};

const DateInput = ({ register, birth, birthError }: Props) => {
  return (
    <div className="input-wrapper">
      <label className="label">
        {FORM_PAGE_TITLES.birthDate}
        <input
          type="date"
          {...register(birth, {
            required: FORM_ERRORS.birthError,
            validate: (value: string | undefined) => validateDate(value) || FORM_ERRORS.birthError,
          })}
          className="input"
        />
      </label>
      {birthError && <p className="form-error">{FORM_ERRORS.birthError}</p>}
    </div>
  );
};

export default DateInput;

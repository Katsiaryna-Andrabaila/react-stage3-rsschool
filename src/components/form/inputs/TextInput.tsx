import React from 'react';
import { FORM_ERRORS, FORM_PAGE_TITLES } from '../../../constants/constants';
import { Path, UseFormRegister } from 'react-hook-form';
import { SubmitData } from 'types/types';

type Props = {
  register: UseFormRegister<SubmitData>;
  name: Path<{ name: string }>;
  nameError: string | undefined;
};

const TextInput = ({ register, name, nameError }: Props) => {
  return (
    <div className="input-wrapper">
      <label className="label">
        {FORM_PAGE_TITLES.petName}
        <input
          type="text"
          {...register(name, {
            required: FORM_ERRORS.nameError,
            pattern: { value: /^[a-zA-Zа-яА-Я]{3,}$/, message: FORM_ERRORS.nameError },
          })}
          className="input"
          data-testid="name-input"
        />
      </label>
      {nameError && <p className="form-error">{FORM_ERRORS.nameError}</p>}
    </div>
  );
};

export default TextInput;

import React from 'react';
import { FORM_ERRORS, FORM_PAGE_TITLES } from '../../../constants/constants';
import { Path, UseFormRegister } from 'react-hook-form';
import { validatePicture } from '../../../utils/formValidation';
import { SubmitData } from '../../../types/types';

type Props = {
  register: UseFormRegister<SubmitData>;
  picture: Path<{ picture: FileList }>;
  pictureError: string | undefined;
};

export const FileInput = ({ register, picture, pictureError }: Props) => {
  return (
    <div className="input-wrapper">
      <label className="label">
        {FORM_PAGE_TITLES.picture}
        <input
          type="file"
          {...register(picture, {
            required: FORM_ERRORS.pictureError,
            validate: (picture: FileList) => validatePicture(picture),
          })}
          className="file-input"
        />
      </label>
      {pictureError && <p className="form-error">{FORM_ERRORS.pictureError}</p>}
    </div>
  );
};

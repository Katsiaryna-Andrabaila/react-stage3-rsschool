import React from 'react';
import { FORM_ERRORS, FORM_PAGE_TITLES } from '../../../constants/constants';

const FileInput = (props: {
  pictureRef: React.RefObject<HTMLInputElement>;
  pictureError: string;
}) => {
  const { pictureRef, pictureError } = props;
  return (
    <div className="input-wrapper">
      <label className="label">
        {FORM_PAGE_TITLES.picture}
        <input type="file" ref={pictureRef} className="file-input" />
      </label>
      {pictureError && <p className="form-error">{FORM_ERRORS.pictureError}</p>}
    </div>
  );
};

export default FileInput;

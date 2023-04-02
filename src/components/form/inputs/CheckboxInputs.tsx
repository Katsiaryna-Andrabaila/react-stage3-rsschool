import React from 'react';
import { FORM_ERRORS, FORM_PAGE_TITLES } from '../../../constants/constants';
import { Path, UseFormRegister } from 'react-hook-form';
import { SubmitData } from '../../../types/types';

type Props = {
  register: UseFormRegister<SubmitData>;
  feed: Path<{ feed: string }>;
  feedError: string | undefined;
};

const CheckboxInputs = ({ register, feed, feedError }: Props) => {
  return (
    <div className="input-wrapper">
      <div className="input-label">
        <label className="label">
          <input
            type="checkbox"
            {...register(feed, {
              required: FORM_ERRORS.feedError,
            })}
            value="dry"
            className="checkbox"
          />
          {FORM_PAGE_TITLES.dry}
        </label>
        <label className="label">
          <input
            type="checkbox"
            {...register(feed, {
              required: FORM_ERRORS.feedError,
            })}
            value="natural"
            className="checkbox"
          />
          {FORM_PAGE_TITLES.natural}
        </label>
      </div>
      {feedError && <p className="form-error">{FORM_ERRORS.feedError}</p>}
    </div>
  );
};

export default CheckboxInputs;

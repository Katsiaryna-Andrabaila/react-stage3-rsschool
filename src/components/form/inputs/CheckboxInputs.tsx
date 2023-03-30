import React from 'react';
import { FORM_ERRORS, FORM_PAGE_TITLES } from '../../../constants/constants';

const CheckboxInputs = (props: {
  dryFeedRef: React.RefObject<HTMLInputElement>;
  naturalFeedRef: React.RefObject<HTMLInputElement>;
  feedError: string;
}) => {
  const { dryFeedRef, naturalFeedRef, feedError } = props;
  return (
    <div className="input-wrapper">
      <div className="input-label">
        <label className="label">
          <input type="checkbox" ref={dryFeedRef} className="checkbox" />
          {FORM_PAGE_TITLES.dry}
        </label>
        <label className="label">
          <input type="checkbox" ref={naturalFeedRef} className="checkbox" />
          {FORM_PAGE_TITLES.natural}
        </label>
      </div>
      {feedError && <p className="form-error">{FORM_ERRORS.feedError}</p>}
    </div>
  );
};

export default CheckboxInputs;

import React from 'react';
import { FORM_ERRORS, FORM_PAGE_TITLES } from '../../../constants/constants';

export default class CheckboxInputs extends React.Component<{
  dryFeedRef: React.RefObject<HTMLInputElement>;
  naturalFeedRef: React.RefObject<HTMLInputElement>;
  feedError: string;
}> {
  render() {
    return (
      <div className="input-wrapper">
        <div className="input-label">
          <label className="label">
            <input type="checkbox" ref={this.props.dryFeedRef} className="checkbox" />
            {FORM_PAGE_TITLES.dry}
          </label>
          <label className="label">
            <input type="checkbox" ref={this.props.naturalFeedRef} className="checkbox" />
            {FORM_PAGE_TITLES.natural}
          </label>
        </div>
        {this.props.feedError && <p className="form-error">{FORM_ERRORS.feedError}</p>}
      </div>
    );
  }
}

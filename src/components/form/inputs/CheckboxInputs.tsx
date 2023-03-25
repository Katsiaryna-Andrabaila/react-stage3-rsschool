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
        <div>
          {FORM_PAGE_TITLES.feed}
          <label>
            {FORM_PAGE_TITLES.dry}
            <input type="checkbox" ref={this.props.dryFeedRef} />
          </label>
          <label>
            {FORM_PAGE_TITLES.natural}
            <input type="checkbox" ref={this.props.naturalFeedRef} />
          </label>
        </div>
        {this.props.feedError && <p className="form-error">{FORM_ERRORS.feedError}</p>}
      </div>
    );
  }
}

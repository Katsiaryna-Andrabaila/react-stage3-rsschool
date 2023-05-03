import React from 'react';
import { FORM_ERRORS, FORM_PAGE_TITLES } from '../../../constants/constants';

export default class SelectInput extends React.Component<{
  hairRef: React.RefObject<HTMLSelectElement>;
  hairError: string;
}> {
  render() {
    return (
      <div className="input-wrapper">
        <label className="label">
          {FORM_PAGE_TITLES.hairLength}
          <select ref={this.props.hairRef} className="input">
            <option></option>
            <option>{FORM_PAGE_TITLES.long}</option>
            <option>{FORM_PAGE_TITLES.middle}</option>
            <option>{FORM_PAGE_TITLES.short}</option>
            <option>{FORM_PAGE_TITLES.hairless}</option>
          </select>
        </label>
        {this.props.hairError && <p className="form-error">{FORM_ERRORS.hairError}</p>}
      </div>
    );
  }
}

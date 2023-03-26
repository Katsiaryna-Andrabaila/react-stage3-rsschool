import React from 'react';
import { FORM_ERRORS, FORM_PAGE_TITLES } from '../../../constants/constants';

export default class RadioInputs extends React.Component<{
  maleRef: React.RefObject<HTMLInputElement>;
  femaleRef: React.RefObject<HTMLInputElement>;
  genderError: string;
}> {
  render() {
    return (
      <div className="input-wrapper">
        <div className="input-label">
          <label className="radio-label">
            <input type="radio" name="gender" ref={this.props.maleRef} />
            <span>{FORM_PAGE_TITLES.male}</span>
          </label>
          <label className="radio-label">
            <input type="radio" name="gender" ref={this.props.femaleRef} />
            <span>{FORM_PAGE_TITLES.female}</span>
          </label>
        </div>
        {this.props.genderError && <p className="form-error">{FORM_ERRORS.genderError}</p>}
      </div>
    );
  }
}

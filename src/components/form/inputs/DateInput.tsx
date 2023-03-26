import React from 'react';
import { FORM_ERRORS, FORM_PAGE_TITLES } from '../../../constants/constants';

export default class DateInput extends React.Component<{
  dateRef: React.RefObject<HTMLInputElement>;
  dateError: string;
}> {
  render() {
    return (
      <div className="input-wrapper">
        <label className="label">
          {FORM_PAGE_TITLES.birthDate}
          <input type="date" ref={this.props.dateRef} className="input" />
        </label>
        {this.props.dateError && <p className="form-error">{FORM_ERRORS.birthError}</p>}
      </div>
    );
  }
}

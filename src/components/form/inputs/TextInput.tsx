import React from 'react';
import { FORM_ERRORS, FORM_PAGE_TITLES } from '../../../constants/constants';

export default class TextInput extends React.Component<{
  nameRef: React.RefObject<HTMLInputElement>;
  nameError: string;
}> {
  render() {
    return (
      <div className="input-wrapper">
        <label className="label">
          {FORM_PAGE_TITLES.petName}
          <input type="text" ref={this.props.nameRef} className="input" />
        </label>
        {this.props.nameError && <p className="form-error">{FORM_ERRORS.nameError}</p>}
      </div>
    );
  }
}

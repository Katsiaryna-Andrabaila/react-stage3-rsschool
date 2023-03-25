import React from 'react';
import { FORM_ERRORS, FORM_PAGE_TITLES } from '../../../constants/constants';

export default class FileInput extends React.Component<{
  pictureRef: React.RefObject<HTMLInputElement>;
  pictureError: string;
}> {
  render() {
    return (
      <div className="input-wrapper">
        <label>
          {FORM_PAGE_TITLES.picture}
          <input type="file" ref={this.props.pictureRef} />
        </label>
        {this.props.pictureError && <p className="form-error">{FORM_ERRORS.pictureError}</p>}
      </div>
    );
  }
}

import { FORM_PAGE_TITLES } from 'constants/constants';
import React, { FormEvent } from 'react';
import REFS from 'utils/refs';

export default class Form extends React.Component {
  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  render() {
    return (
      <form className="form-component" onSubmit={this.handleSubmit} ref={REFS.formRef}>
        <label>
          {FORM_PAGE_TITLES.petName}
          <input type="text" ref={REFS.nameRef} />
        </label>
        <label>
          {FORM_PAGE_TITLES.birthDate}
          <input type="date" ref={REFS.birthRef} />
        </label>
        <label>
          {FORM_PAGE_TITLES.hairLength}
          <select ref={REFS.hairRef}>
            <option>{FORM_PAGE_TITLES.long}</option>
            <option>{FORM_PAGE_TITLES.middle}</option>
            <option>{FORM_PAGE_TITLES.short}</option>
            <option>{FORM_PAGE_TITLES.noHair}</option>
          </select>
        </label>
        <div>
          {FORM_PAGE_TITLES.gender}
          <label>
            {FORM_PAGE_TITLES.male}
            <input type="radio" name="gender" ref={REFS.genderRef} />
          </label>
          <label>
            {FORM_PAGE_TITLES.female}
            <input type="radio" name="gender" ref={REFS.genderRef} />
          </label>
        </div>
        <label>
          {FORM_PAGE_TITLES.picture}
          <input type="file" accept=".jpg, .jpeg, .png, .gif" ref={REFS.pictureRef} />
        </label>
        <input type="checkbox" />
        <button type="submit" ref={REFS.submitRef}>
          {FORM_PAGE_TITLES.submitBtn}
        </button>
      </form>
    );
  }
}

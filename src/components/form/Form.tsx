import { FORM_PAGE_TITLES } from 'constants/constants';
import React, { FormEvent, RefObject } from 'react';

export default class Form extends React.Component {
  formRef: RefObject<HTMLFormElement> = React.createRef();
  nameRef: RefObject<HTMLInputElement> = React.createRef();
  birthRef: RefObject<HTMLInputElement> = React.createRef();
  hairRef: RefObject<HTMLSelectElement> = React.createRef();
  genderRef: RefObject<HTMLInputElement> = React.createRef();
  pictureRef: RefObject<HTMLInputElement> = React.createRef();
  submitRef: RefObject<HTMLButtonElement> = React.createRef();

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  render() {
    return (
      <form className="form-component" onSubmit={this.handleSubmit} ref={this.formRef}>
        <label>
          {FORM_PAGE_TITLES.petName}
          <input type="text" ref={this.nameRef} />
        </label>
        <label>
          {FORM_PAGE_TITLES.birthDate}
          <input type="date" ref={this.birthRef} />
        </label>
        <label>
          {FORM_PAGE_TITLES.hairLength}
          <select ref={this.hairRef}>
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
            <input type="radio" name="gender" ref={this.genderRef} />
          </label>
          <label>
            {FORM_PAGE_TITLES.female}
            <input type="radio" name="gender" ref={this.genderRef} />
          </label>
        </div>
        <label>
          {FORM_PAGE_TITLES.picture}
          <input type="file" accept=".jpg, .jpeg, .png, .gif" ref={this.pictureRef} />
        </label>
        <input type="checkbox" />
        <button type="submit" ref={this.submitRef}>
          {FORM_PAGE_TITLES.submitBtn}
        </button>
      </form>
    );
  }
}

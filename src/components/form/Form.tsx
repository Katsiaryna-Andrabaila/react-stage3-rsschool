import { FORM_ERRORS, FORM_PAGE_TITLES } from '../../constants/constants';
import React, { FormEvent } from 'react';
import REFS from '../../utils/refs';
import { FormCard } from 'types/types';
import {
  validateDate,
  validateGender,
  validateHair,
  validateName,
  validatePicture,
} from 'utils/formValidation';
import getFeedArray from 'utils/getFeedArray';

export default class Form extends React.Component<{ addFormCard: (card: FormCard) => void }> {
  state = {
    nameError: '',
    birthError: '',
    hairError: '',
    genderError: '',
    pictureError: '',
    feedError: '',
  };

  clearState = () => {
    this.setState({
      nameError: '',
      birthError: '',
      hairError: '',
      genderError: '',
      pictureError: '',
      feedError: '',
    });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = REFS.nameRef.current?.value;
    const birth = REFS.birthRef.current?.value;
    const hair = REFS.hairRef.current?.value;
    const male = REFS.maleRef.current?.checked;
    const female = REFS.femaleRef.current?.checked;
    const picture = REFS.pictureRef.current?.files?.[0];
    const dryFeed = REFS.dryFeedRef.current?.checked;
    const naturalFeed = REFS.naturalFeedRef.current?.checked;

    const feedArray: string[] = getFeedArray(dryFeed, naturalFeed);

    !name || !(name && validateName(name))
      ? this.setState((prevState) => ({ ...prevState, nameError: FORM_ERRORS.nameError }))
      : this.setState((prevState) => ({ ...prevState, nameError: '' }));

    !birth || !(birth && validateDate(new Date(birth)))
      ? this.setState((prevState) => ({ ...prevState, birthError: FORM_ERRORS.birthError }))
      : this.setState((prevState) => ({ ...prevState, birthError: '' }));

    !hair || !(hair && validateHair(hair))
      ? this.setState((prevState) => ({ ...prevState, hairError: FORM_ERRORS.hairError }))
      : this.setState((prevState) => ({ ...prevState, hairError: '' }));

    (male === undefined && female === undefined) || !validateGender(male, female)
      ? this.setState((prevState) => ({ ...prevState, genderError: FORM_ERRORS.hairError }))
      : this.setState((prevState) => ({ ...prevState, genderError: '' }));

    !picture || !(picture && validatePicture(picture))
      ? this.setState((prevState) => ({ ...prevState, pictureError: FORM_ERRORS.pictureError }))
      : this.setState((prevState) => ({ ...prevState, pictureError: '' }));

    !feedArray.length
      ? this.setState((prevState) => ({ ...prevState, feedError: FORM_ERRORS.feedError }))
      : this.setState((prevState) => ({ ...prevState, feedError: '' }));

    if (
      name &&
      validateName(name) &&
      birth &&
      validateDate(new Date(birth)) &&
      hair &&
      validateHair(hair) &&
      (male !== undefined || female !== undefined) &&
      validateGender(male, female) &&
      picture &&
      validatePicture(picture) &&
      feedArray.length
    ) {
      const newCard: FormCard = {
        name,
        birth,
        hair,
        gender: male ? 'male' : 'female',
        picture,
        feed: feedArray,
      };

      this.props.addFormCard(newCard);
      REFS.formRef.current?.reset();
      this.clearState();
    }
  };

  render() {
    return (
      <form className="form-component" onSubmit={this.handleSubmit} ref={REFS.formRef}>
        <div className="input-wrapper">
          <label>
            {FORM_PAGE_TITLES.petName}
            <input type="text" ref={REFS.nameRef} />
          </label>
          {this.state.nameError && <p className="form-error">{FORM_ERRORS.nameError}</p>}
        </div>
        <div className="input-wrapper">
          <label>
            {FORM_PAGE_TITLES.birthDate}
            <input type="date" ref={REFS.birthRef} />
          </label>
          {this.state.birthError && <p className="form-error">{FORM_ERRORS.birthError}</p>}
        </div>
        <div className="input-wrapper">
          <label>
            {FORM_PAGE_TITLES.hairLength}
            <select ref={REFS.hairRef} defaultValue="choose">
              <option disabled value="choose">
                Choose:{' '}
              </option>
              <option value="long">{FORM_PAGE_TITLES.long}</option>
              <option value="middle">{FORM_PAGE_TITLES.middle}</option>
              <option value="short">{FORM_PAGE_TITLES.short}</option>
              <option value="hairless">{FORM_PAGE_TITLES.hairless}</option>
            </select>
          </label>
          {this.state.hairError && <p className="form-error">{FORM_ERRORS.hairError}</p>}
        </div>
        <div className="input-wrapper">
          <div>
            {FORM_PAGE_TITLES.gender}
            <label>
              {FORM_PAGE_TITLES.male}
              <input type="radio" name="gender" ref={REFS.maleRef} />
            </label>
            <label>
              {FORM_PAGE_TITLES.female}
              <input type="radio" name="gender" ref={REFS.femaleRef} />
            </label>
          </div>
          {this.state.genderError && <p className="form-error">{FORM_ERRORS.genderError}</p>}
        </div>
        <div className="input-wrapper">
          <label>
            {FORM_PAGE_TITLES.picture}
            <input type="file" ref={REFS.pictureRef} />
          </label>
          {this.state.pictureError && <p className="form-error">{FORM_ERRORS.pictureError}</p>}
        </div>
        <div className="input-wrapper">
          <div>
            {FORM_PAGE_TITLES.feed}
            <label>
              {FORM_PAGE_TITLES.dry}
              <input type="checkbox" ref={REFS.dryFeedRef} />
            </label>
            <label>
              {FORM_PAGE_TITLES.natural}
              <input type="checkbox" ref={REFS.naturalFeedRef} />
            </label>
          </div>
          {this.state.feedError && <p className="form-error">{FORM_ERRORS.feedError}</p>}
        </div>
        <button type="submit" ref={REFS.submitRef}>
          {FORM_PAGE_TITLES.submitBtn}
        </button>
      </form>
    );
  }
}

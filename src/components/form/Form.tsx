import { FORM_PAGE_TITLES } from '../../constants/constants';
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

export default class Form extends React.Component<{ addFormCard: (card: FormCard) => void }> {
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

    const feedArray: string[] = [];
    if (dryFeed && !naturalFeed) {
      feedArray.push(FORM_PAGE_TITLES.dry);
    } else if (!dryFeed && naturalFeed) {
      feedArray.push(FORM_PAGE_TITLES.natural);
    } else if (dryFeed && naturalFeed) {
      feedArray.push(FORM_PAGE_TITLES.dry, FORM_PAGE_TITLES.natural);
    }

    if (
      name &&
      validateName(name) &&
      birth &&
      validateDate(new Date(birth)) &&
      hair &&
      validateHair(hair) &&
      (male || male === false) &&
      (female || female === false) &&
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
    }
  };

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
        <label>
          {FORM_PAGE_TITLES.picture}
          <input type="file" ref={REFS.pictureRef} />
        </label>
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
        <button type="submit" ref={REFS.submitRef}>
          {FORM_PAGE_TITLES.submitBtn}
        </button>
      </form>
    );
  }
}

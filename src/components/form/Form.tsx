import { FORM_ERRORS, FORM_PAGE_TITLES } from '../../constants/constants';
import React, { FormEvent } from 'react';
import REFS from '../../utils/refs';
import { FormCard } from '../../types/types';
import {
  validateDate,
  validateGender,
  validateHair,
  validateName,
  validatePicture,
} from '../../utils/formValidation';
import getFeedArray from '../../utils/getFeedArray';
import TextInput from './inputs/TextInput';
import DateInput from './inputs/DateInput';
import SelectInput from './inputs/SelectInput';
import RadioInputs from './inputs/RadioInputs';
import FileInput from './inputs/FileInput';
import CheckboxInputs from './inputs/CheckboxInputs';

export default class Form extends React.Component<{
  addFormCard: (card: FormCard, showMessage: boolean) => void;
}> {
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

    !validateName(name)
      ? this.setState((prevState) => ({ ...prevState, nameError: FORM_ERRORS.nameError }))
      : this.setState((prevState) => ({ ...prevState, nameError: '' }));

    !validateDate(birth)
      ? this.setState((prevState) => ({ ...prevState, birthError: FORM_ERRORS.birthError }))
      : this.setState((prevState) => ({ ...prevState, birthError: '' }));

    !validateHair(hair)
      ? this.setState((prevState) => ({ ...prevState, hairError: FORM_ERRORS.hairError }))
      : this.setState((prevState) => ({ ...prevState, hairError: '' }));

    !validateGender(male, female)
      ? this.setState((prevState) => ({ ...prevState, genderError: FORM_ERRORS.hairError }))
      : this.setState((prevState) => ({ ...prevState, genderError: '' }));

    !validatePicture(picture)
      ? this.setState((prevState) => ({ ...prevState, pictureError: FORM_ERRORS.pictureError }))
      : this.setState((prevState) => ({ ...prevState, pictureError: '' }));

    !feedArray.length
      ? this.setState((prevState) => ({ ...prevState, feedError: FORM_ERRORS.feedError }))
      : this.setState((prevState) => ({ ...prevState, feedError: '' }));

    if (
      validateName(name) &&
      validateDate(birth) &&
      validateHair(hair) &&
      validateGender(male, female) &&
      validatePicture(picture) &&
      feedArray.length
    ) {
      if (name && birth && hair && picture) {
        const newCard: FormCard = {
          name,
          birth,
          hair,
          gender: male ? 'male' : 'female',
          picture,
          feed: feedArray,
        };

        this.props.addFormCard(newCard, true);
        REFS.formRef.current?.reset();
        this.clearState();
      }
    }
  };

  render() {
    return (
      <form className="form-component" onSubmit={this.handleSubmit} ref={REFS.formRef}>
        <TextInput nameRef={REFS.nameRef} nameError={this.state.nameError} />
        <DateInput dateRef={REFS.birthRef} dateError={this.state.birthError} />
        <SelectInput hairRef={REFS.hairRef} hairError={this.state.hairError} />
        <RadioInputs
          maleRef={REFS.maleRef}
          femaleRef={REFS.femaleRef}
          genderError={this.state.genderError}
        />
        <FileInput pictureRef={REFS.pictureRef} pictureError={this.state.pictureError} />
        <CheckboxInputs
          dryFeedRef={REFS.dryFeedRef}
          naturalFeedRef={REFS.naturalFeedRef}
          feedError={this.state.feedError}
        />
        <button type="submit" className="button">
          {FORM_PAGE_TITLES.submitBtn}
        </button>
      </form>
    );
  }
}

import { FORM_PAGE_TITLES } from '../../constants/constants';
import React from 'react';
import { FormCard } from '../../types/types';
import Form from './Form';
import FormCards from './FormCards';

export default class FormMain extends React.Component<
  Record<string, unknown>,
  { formCards: FormCard[] }
> {
  state = { formCards: [] };

  addFormCard = (card: FormCard) => {
    this.setState((prevState) => ({ formCards: [...prevState.formCards, card] }));
  };

  render() {
    return (
      <main className="form-main">
        <section className="form-section">
          <h2>{FORM_PAGE_TITLES.addPuppy}</h2>
          <Form addFormCard={this.addFormCard} />
        </section>
        <section className="form-section">
          <h2>{FORM_PAGE_TITLES.puppiesList}</h2>
          <FormCards formCards={this.state.formCards} />
        </section>
      </main>
    );
  }
}

import { FORM_PAGE_TITLES, MESSAGE_DELAY, NEW_CARD_MESSAGE } from '../../constants/constants';
import React from 'react';
import { FormCard } from '../../types/types';
import Form from './Form';
import FormCards from './FormCards';

export default class FormMain extends React.Component<
  Record<string, unknown>,
  { formCards: FormCard[]; showMessage: boolean }
> {
  state = {
    formCards: [],
    showMessage: false,
  };

  addFormCard = (card: FormCard, showMessage: boolean) => {
    this.setState((prevState) => ({ formCards: [...prevState.formCards, card], showMessage }));
  };

  render() {
    return (
      <main className="form-main">
        <section className="form-section">
          <h2 className="form-page-header">{FORM_PAGE_TITLES.addPuppy}</h2>
          <Form addFormCard={this.addFormCard} />
        </section>
        <section className="form-section form-cards-section">
          <h2 className="form-page-header">{FORM_PAGE_TITLES.puppiesList}</h2>
          <FormCards formCards={this.state.formCards} />
        </section>
        <>
          {this.state.showMessage &&
            setTimeout(
              () => this.setState((prevState) => ({ ...prevState, showMessage: false })),
              MESSAGE_DELAY
            ) && <div className="new-card-message">{NEW_CARD_MESSAGE}</div>}
        </>
      </main>
    );
  }
}

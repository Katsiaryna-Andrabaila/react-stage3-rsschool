import { FORM_PAGE_TITLES, MESSAGE_DELAY, NEW_CARD_MESSAGE } from '../../constants/constants';
import React, { useState } from 'react';
import { FormCard } from '../../types/types';
import Form from './Form';
import FormCards from './FormCards';

type State = {
  formCards: FormCard[];
  showMessage: boolean;
};

const FormMain = () => {
  const [state, setState] = useState<State>({
    formCards: [],
    showMessage: false,
  });

  const addFormCard = (card: FormCard, showMessage: boolean) => {
    setState((prevState) => ({ formCards: [...prevState.formCards, card], showMessage }));
  };

  return (
    <main className="form-main">
      <section className="form-section">
        <h2 className="form-page-header">{FORM_PAGE_TITLES.addPuppy}</h2>
        <Form addFormCard={addFormCard} />
      </section>
      <section className="form-section form-cards-section">
        <h2 className="form-page-header">{FORM_PAGE_TITLES.puppiesList}</h2>
        <FormCards formCards={state.formCards} />
      </section>
      <>
        {state.showMessage &&
          setTimeout(
            () => setState((prevState) => ({ ...prevState, showMessage: false })),
            MESSAGE_DELAY
          ) && <div className="new-card-message">{NEW_CARD_MESSAGE}</div>}
      </>
    </main>
  );
};

export default FormMain;

import { FORM_PAGE_TITLES } from 'constants/constants';
import React from 'react';
import Form from './Form';
import FormCards from './FormCards';

export default class FormMain extends React.Component {
  render() {
    return (
      <main className="form-main">
        <section className="form-section">
          <h2>{FORM_PAGE_TITLES.addPuppy}</h2>
          <Form />
        </section>
        <section className="form-section">
          <h2>{FORM_PAGE_TITLES.puppiesList}</h2>
          <FormCards />
        </section>
      </main>
    );
  }
}

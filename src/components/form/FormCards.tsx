import React from 'react';
import { FormCard } from '../../types/types';
import FormCardComponent from './FormCardComponent';

export default class FormCards extends React.Component<{ formCards: FormCard[] }> {
  render() {
    return (
      <section className="form-cards">
        {this.props.formCards.map((item, index) => {
          return <FormCardComponent key={index} {...item} />;
        })}
      </section>
    );
  }
}

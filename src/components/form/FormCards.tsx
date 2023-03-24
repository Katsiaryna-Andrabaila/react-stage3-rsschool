import React from 'react';
import { FormCard } from '../../types/types';

export default class FormCards extends React.Component<{ formCards: FormCard[] }> {
  render() {
    console.log(this.props.formCards);
    return <section className="form-cards"></section>;
  }
}

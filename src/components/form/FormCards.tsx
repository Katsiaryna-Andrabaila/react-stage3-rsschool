import { FormCard } from '../../types/types';
import { FormCardComponent } from './FormCardComponent';

export const FormCards = (props: { formCards: FormCard[] }) => {
  return (
    <section className="form-cards">
      {props.formCards.map((item) => {
        return <FormCardComponent key={item.id} {...item} />;
      })}
    </section>
  );
};

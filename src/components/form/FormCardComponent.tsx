import { FormCard } from '../../types/types';

export const FormCardComponent = (props: FormCard) => {
  const { name, picture, gender, birth, hair, feed } = props;
  return (
    <div className="form-card">
      <h2 className="form-card-header">{name}</h2>
      <div style={{ backgroundImage: `url("${picture}")` }} className="form-card-image" />
      <h4>{gender}</h4>
      <h4>Date of birth: {birth}</h4>
      <h4>Hair: {hair}</h4>
      <h4>Feed: {feed.join(', ')}</h4>
    </div>
  );
};

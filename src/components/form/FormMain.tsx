import { FORM_PAGE_TITLES, MESSAGE_DELAY, NEW_CARD_MESSAGE } from '../../constants/constants';
import { Form } from './Form';
import { FormCards } from './FormCards';
import { showMessage } from '../../redux/reducers/formReducer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export const FormMain = () => {
  const dispatch = useAppDispatch();
  const { formCards, isMessage } = useAppSelector((state) => state.form);

  return (
    <main className="form-main">
      <section className="form-section">
        <h2 className="form-page-header">{FORM_PAGE_TITLES.addPuppy}</h2>
        <Form />
      </section>
      <section className="form-section form-cards-section">
        <h2 className="form-page-header">{FORM_PAGE_TITLES.puppiesList}</h2>
        <FormCards formCards={formCards} />
      </section>
      <>
        {isMessage &&
          setTimeout(() => dispatch(showMessage({ showMessage: false })), MESSAGE_DELAY) && (
            <div className="new-card-message">{NEW_CARD_MESSAGE}</div>
          )}
      </>
    </main>
  );
};

import { FORM_PAGE_TITLES } from '../../constants/constants';
import React, { useEffect } from 'react';
import { FormCard, SubmitData } from '../../types/types';
import TextInput from './inputs/TextInput';
import DateInput from './inputs/DateInput';
import SelectInput from './inputs/SelectInput';
import RadioInputs from './inputs/RadioInputs';
import FileInput from './inputs/FileInput';
import CheckboxInputs from './inputs/CheckboxInputs';
import { useForm } from 'react-hook-form';

const Form = (props: { addFormCard: (card: FormCard, showMessage: boolean) => void }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm<SubmitData>({
    reValidateMode: 'onSubmit',
    mode: 'onSubmit',
  });

  const onSubmit = (data: SubmitData) => {
    const { name, birth, hair, gender, picture, feed } = data;
    const card: FormCard = {
      id: new Date().getTime(),
      name,
      birth,
      hair,
      gender,
      picture: picture[0],
      feed,
    };
    props.addFormCard(card, true);
  };

  useEffect(() => {
    isSubmitSuccessful && reset();
  }, [reset, isSubmitSuccessful]);

  return (
    <form className="form-component" onSubmit={handleSubmit(onSubmit)}>
      <TextInput register={register} name="name" nameError={errors?.name?.message} />
      <DateInput register={register} birth="birth" birthError={errors?.birth?.message} />
      <SelectInput register={register} hair="hair" hairError={errors?.hair?.message} />
      <RadioInputs register={register} gender="gender" genderError={errors?.gender?.message} />
      <FileInput register={register} picture="picture" pictureError={errors?.picture?.message} />
      <CheckboxInputs register={register} feed="feed" feedError={errors?.feed?.message} />
      <button type="submit" className="button">
        {FORM_PAGE_TITLES.submitBtn}
      </button>
    </form>
  );
};

export default Form;

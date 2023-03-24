import React from 'react';
import { TRefs } from 'types/types';

const REFS: TRefs = {
  formRef: React.createRef(),
  nameRef: React.createRef(),
  birthRef: React.createRef(),
  hairRef: React.createRef(),
  genderRef: React.createRef(),
  pictureRef: React.createRef(),
  submitRef: React.createRef(),
};

export default REFS;

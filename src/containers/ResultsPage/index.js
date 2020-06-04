import React from 'react';
import { useHistory } from "react-router-dom";
import {
  SearchResult
} from '@fidisys-oss/design-system';

import { provider } from '../../data/provider';
import { gender } from '../../data/gender';
import { patientTypes } from '../../data/patientTypes';
import { specialities } from '../../data/specialities';

const Results = () => {

  const history = useHistory();

  const viewProfile = data => {
    history.push('/profile');
  };

  const toHome = () => {
    history.push("/");
  };

  return (
    <SearchResult
      logoClick={toHome}
      gender={gender}
      patientTypes={patientTypes}
      providerCategory={provider}
      speciality={specialities}
      viewProfileClick={viewProfile}
    />
  );
};

export default Results;

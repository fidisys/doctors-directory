import React from 'react';
import { useHistory } from "react-router-dom";
import {
  SearchPage
} from '@fidisys-oss/design-system';

import { category } from '../../data/category';
import { gender } from '../../data/gender';
import { patientTypes } from '../../data/patientTypes';
import { hospitals } from '../../data/hospitals';
import { states } from '../../data/states';

import {
  Container
} from './styles';

const LayoutPage = () => {

  const history = useHistory();

  const getState = state => {
    history.push("/results");
  };

  const showData = data => {
    history.push("/results");
  };

  const toHome = () => {
    history.push("/");
  };

  return (
    <Container>
      <SearchPage
        logoClick={toHome}
        callbackSubmit={showData}
        categoryData={category}
        gender={gender}
        patientTypes={patientTypes}
        searchData={hospitals}
        stateClick={getState}
        states={states}
        count={48}
      />
    </Container>
  );
};

export default LayoutPage;

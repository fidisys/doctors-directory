import React, { Fragment, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {
  SearchPage
} from '@fidisys-oss/design-system';

import { allData, allCategories, allGenderTypes, allHospitals, allPatientTypes, allStates } from '../../utils/services/api';

const LayoutPage = () => {

  const history = useHistory();

  const toHome = () => {
    history.push("/");
  };

  const[count, setCount] = useState(null);

  const [allDataDetails, setAllDataDetails] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [hospitalsData, setHospitalsData] = useState([]);
  const [patientTypesData, setPatientTypesData] = useState([]);
  const [genderData, setGenderData] = useState([]);
  const [states, setStates] = useState([]);

  //loaders
  const[loader, setLoader] = useState(true);
  const[allCatLoading, setAllCatLoading] = useState(true);
  const[hospitalsLoading, setHospitalsLoading] = useState(true);
  const[genderLoading, setGenderLoading] = useState(true);
  const[patientsLoading, setPatientsLoading] = useState(true);
  const[statesLoading, setStatesLoading] = useState(true);

  useEffect(() => {
    allData(
      response => {
        setAllDataDetails(response.data);
        setCount(response.data.length);
        setLoader(false);
      },
      error => {
        console.log('error');
      },
    );
    allCategories(
      response => {
        setCategoriesData(response.data);
        setAllCatLoading(false);
      },
      error => {
        console.log('error');
      },
    );
    allGenderTypes(
      response => {
        setGenderData(response.data);
        setGenderLoading(false);
      },
      error => {
        console.log('error');
      },
    );
    allHospitals(
      response => {
        setHospitalsData(response.data);
        setHospitalsLoading(false);
      },
      error => {
        console.log('error');
      },
    );
    allPatientTypes(
      response => {
        setPatientTypesData(response.data);
        setPatientsLoading(false);
      },
      error => {
        console.log('error');
      },
    );
    allStates(
      response => {
        setStates(response.data);
        setStatesLoading(false);
      },
      error => {
        console.log('error');
      },
    );
  }, []);

  //filter
  const[filter, setFilter] = useState({
    categoryValue: [],
    specialityValue: [],
    hospitalValue: [],
    city: [],
    zip: [],
    patientTypeValue: [],
    genderValue: []
  });

  useEffect(() => {
    if(filter) {
      getData();
    }
  }, [filter]);

  const getData = () => {
    const query = buildFilter();
    const result = filterData(allDataDetails, query);
    setCount(result.length);
  };

  const buildFilter = () => {
    let query = {};
    for (let keys in filter) {
      if (filter[keys].constructor === Array && filter[keys].length > 0) {
        query[keys] = filter[keys];
      }
    }
    return query;
  };

  const filterData = (data, query) => {
    const filteredData = data.filter( (item) => {
      for (let key in query) {
        if (item[key] === undefined || !query[key].includes(item[key])) {
          return false;
        }
      }
      return true;
    });
    return filteredData;
  };

  const getCategories = values => {
    let category = [];
    let speciality = [];
    values.length > 0 && values.forEach(item => {
      category.push(item.categoryValue);
      item.speciality.length > 0 && item.speciality.forEach(spec => {
        speciality.push(spec);
      })
      if (speciality.length === 0) {
        category = [];
      }
    })
    setFilter({
      ...filter,
      categoryValue: category,
      specialityValue: speciality
    });
  };

  const getSelectValue = (value, option) => {
    let newArr = [];
    newArr.push(value);
    setFilter({
      ...filter,
      hospitalValue: newArr
    });
  }

  const getCity = (e) => {
    let newArr = [];
    if(e.target.value) {
      newArr.push(e.target.value);
    } else {
      newArr = [];
    }
    setFilter({
      ...filter,
      city: newArr
    });
  }

  const getZip = (e) => {
    let newArr = [];
    if(e.target.value) {
      newArr.push(e.target.value);
    } else {
      newArr = [];
    }
    setFilter({
      ...filter,
      zip: newArr
    });
  }

  const getPatientTypes = (values) => {
    setFilter({
      ...filter,
      patientTypeValue: values
    });
  }

  const getGender = (values) => {
    setFilter({
      ...filter,
      genderValue: values
    });
  };

  const showAllData = filterData => {
    history.push({
      pathname: "/results",
      state: { filter: filter }
    });
  };

  const getState = state => {
    history.push({
      pathname: "/results",
      search: "?state="+state.name
    });
  };

  return (
    <Fragment>
      { (!loader && !allCatLoading && !hospitalsLoading && !patientsLoading && !genderLoading && !statesLoading) &&
        <SearchPage
          logoClick={toHome}
          callbackSubmit={showAllData}
          categoryData={categoriesData}
          gender={genderData}
          patientTypes={patientTypesData}
          searchData={hospitalsData}
          stateClick={getState}
          states={states}
          count={count}
          categoriesCallback={getCategories}
          selectCallback={getSelectValue}
          cityCallback={getCity}
          zipCallback={getZip}
          typesGroupCallback={getPatientTypes}
          genderCallback={getGender}
        />
      }
    </Fragment>
  );
};

export default LayoutPage;

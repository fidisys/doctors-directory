import React, { Fragment, useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import {
  ResultPage,
  Header,
  Logo,
  FilterResults,
  ResultsList
} from '@fidisys-oss/design-system';

import { allData, allCategories, providerCategory, allGenderTypes, allPatientTypes } from '../../utils/services/api';

const Results = (props) => {

  const location = useLocation();
  const history = useHistory();

  const query = new URLSearchParams(location.search);
  const paramField = query.get('state');

  //loaders
  const[loader, setLoader] = useState(true);
  const[allCatLoading, setAllCatLoading] = useState(true);
  const[providerLoading, setProviderLoading] = useState(true);
  const[genderLoading, setGenderLoading] = useState(true);
  const[patientsLoading, setPatientsLoading] = useState(true);

  const [formValues, setFormValues] = useState({
    categoryValue: [],
    specialityValue: [],
    city: [],
    zip: [],
    patientTypeValue: [],
    genderValue: [],
    hospitalValue: [],
    state: []
  });

  const [count, setCount] = useState(0);
  const [categoryHeading, setCategoryHeading] = useState('Results');

  const [allDataDetails, setAllDataDetails] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [patientTypesData, setPatientTypesData] = useState([]);
  const [genderData, setGenderData] = useState([]);
  const [speciality, setSpeciality] = useState({});

  useEffect(() => {
    if (paramField === null && location.state) {
      const filterValues = location.state.filter;
      setFormValues({
        ...formValues,
        categoryValue: filterValues.categoryValue,
        specialityValue: filterValues.specialityValue,
        city: filterValues.city,
        zip: filterValues.zip,
        patientTypeValue: filterValues.patientTypeValue,
        genderValue: filterValues.genderValue,
        hospitalValue: filterValues.hospitalValue
      });
      if (filterValues.categoryValue.length > 0) {
        setCategoryHeading(filterValues.categoryValue[0]);
      }
    }

    if(paramField !== null) {
      var stateArr = [];
      stateArr.push(paramField);
      setFormValues({
        ...formValues,
        state: stateArr
      });
    }

    allData(
      response => {
        setAllDataDetails(response.data);
        setLoader(false);
      },
      error => {
        console.log('error');
      },
    );
    allCategories(
      response => {
        setCategoriesData(response.data);
        if(response.data && response.data.length > 0) {
          response.data.forEach(allCat => {
            speciality[allCat.categoryValue] = allCat.speciality;
            setSpeciality(speciality);
          });
        }
        setAllCatLoading(false);
      },
      error => {
        console.log('error');
      },
    );
    providerCategory(
      response => {
        setCategoryData(response.data);
        setProviderLoading(false);
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
    allPatientTypes(
      response => {
        setPatientTypesData(response.data);
        setPatientsLoading(false);
      },
      error => {
        console.log('error');
      },
    );
  }, []);

  useEffect(() => {
    if(formValues) {
      getData();
    }
  }, [categoryData, formValues]);

  //filter
  const[filteredArr, setFilteredArr] = useState([]);

  const getData = () => {
    const query = buildFilter();
    const result = filterData(allDataDetails, query);
    setCount(result.length);
    setFilteredArr(result);
  };

  const buildFilter = () => {
    let query = {};
    for (let keys in formValues) {
      if (formValues[keys].constructor === Array && formValues[keys].length > 0) {
        query[keys] = formValues[keys];
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

  const changeCategory = (value, option) => {

    if(formValues.hospitalValue.length > 0) {
      formValues.hospitalValue = [];
      setFormValues({
        ...formValues,
        hospitalValue: []
      });
    }

    var cat = formValues.categoryValue;
    cat = [];
    formValues.specialityValue = [];
    cat.push(value);
    setFormValues({
      ...formValues,
      categoryValue: cat
    });

    setCategoryHeading(option.props.children);
  };

  const changeSpeciality = (value, option) => {
    var spec = formValues.specialityValue;
    spec = [];
    spec.push(value);
    setFormValues({
      ...formValues,
      specialityValue: spec
    });
  }

  const getLocation = value => {
    let newArr = [];
    if(value) {
      newArr.push(value);
    } else {
      newArr = [];
    }
    setFormValues({
      ...formValues,
      city: newArr
    });
  }

  const getZip = value => {
    let newArr = [];
    if(value) {
      newArr.push(value);
    } else {
      newArr = [];
    }
    setFormValues({
      ...formValues,
      zip: newArr
    });
  };

  const patientTypeChange = values => {
    setFormValues({
      ...formValues,
      patientTypeValue: values
    });
  }

  const genderChange = values => {
    setFormValues({
      ...formValues,
      genderValue: values
    });
  };

  //results list
  const sortOptions = [
    {
      value: 'asc',
      label: 'Ascending'
    },
    {
      value: 'desc',
      label: 'Descending'
    }
  ];

  const sortClick = (value, option) => {
    const dataArray = [ ...filteredArr];
    var sortedArray;
    if (value === 'asc') {
      sortedArray = dataArray.sort((a, b) => a.name.localeCompare(b.name));
      setFilteredArr(sortedArray);
    } else if (value === 'desc') {
      sortedArray = dataArray.sort((a, b) => b.name.localeCompare(a.name));
      setFilteredArr(sortedArray);
    }
  }

  const viewProfile = data => {
    history.push({
      pathname: "/profile",
      search: data.name,
      state: { data: data, filter: formValues }
    });
  };

  const toHome = () => {
    history.push("/");
  };

  return (
    <Fragment>
    {
      (!loader && !allCatLoading && !providerLoading && !genderLoading && !patientsLoading) &&
      <ResultPage
        header={<Header content={<Logo logo="https://i.ibb.co/NmLZ0SH/logo.png" heading="DOCTORS.IO" subHeading="Dedicated doctors" onClick={toHome} />} />}
        sidebar={
          <FilterResults
            heading="Filter Results"
            locationLabel="Locations By City"
            locationPlaceholder="E.g San Francisco"
            locationValue={formValues.city}
            locationChange={getLocation}
            zipLabel="ZIP Code"
            zipPlaceholder="Zip code"
            zipValue={formValues.zip}
            zipChange={getZip}
            categoryLabel="Provider Category"
            categoryPlaceholder="Choose Provider Category"
            categoryValue={formValues.categoryValue}
            categoryData={categoryData}
            categoryChange={changeCategory}
            specialityLabel="Speciality by Provider Category"
            specialityPlaceholder="Choose Speciality"
            specialityValue={formValues.specialityValue}
            specialityData={speciality}
            specialityChange={changeSpeciality}
            typesGroupLabel="Type of Patient Served"
            typesValue={formValues.patientTypeValue}
            typesData={patientTypesData}
            typesChange={patientTypeChange}
            genderLabel="Gender of Healthcare Provider"
            genderValue={formValues.genderValue}
            genderData={genderData}
            genderChange={genderChange}
          />
        }
        mainSection={
          <ResultsList
            totalCount={count}
            heading={categoryHeading}
            sortInputPlaceholder="Sort By"
            sortOptions={sortOptions}
            sortClick={sortClick}
            cardData={filteredArr}
            pageSize={5}
            viewProfile={viewProfile}
          />
        }
      />
    }
    </Fragment>
  );
};

export default Results;

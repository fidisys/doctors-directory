import { message } from 'antd';
import { BASE_URL, APIURL } from '../helper';
import logger from '../logger';
import Interceptor from './interceptor';

const request = new Interceptor();

export const allData = async success => {
  try {
    const response = await request.get(`../../api/allData.json`);
    success(response);
  } catch (err) {
    logger(err);
  }
};

export const allCategories = async success => {
  try {
    const response = await request.get(`../../api/category.json`);
    success(response);
  } catch (err) {
    logger(err);
  }
};

export const allGenderTypes = async success => {
  try {
    const response = await request.get(`../../api/gender.json`);
    success(response);
  } catch (err) {
    logger(err);
  }
};

export const allHospitals = async success => {
  try {
    const response = await request.get(`../../api/hospitals.json`);
    success(response);
  } catch (err) {
    logger(err);
  }
};

export const allPatientTypes = async success => {
  try {
    const response = await request.get(`../../api/patientTypes.json`);
    success(response);
  } catch (err) {
    logger(err);
  }
};

export const allStates = async success => {
  try {
    const response = await request.get(`../../api/states.json`);
    success(response);
  } catch (err) {
    logger(err);
  }
};

export const providerCategory = async success => {
  try {
    const response = await request.get(`../../api/providerCategory.json`);
    success(response);
  } catch (err) {
    logger(err);
  }
};

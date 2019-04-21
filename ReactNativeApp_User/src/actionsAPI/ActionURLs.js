import config from '../config';

const API_BaseURL = config.API_BaseURL;

export const JOURNIES = {
  FETCH_JOURNIES: `${API_BaseURL}journies`,
  SUBMIT_JOURNEY_FORM: `${API_BaseURL}journies/submitJourneyForm`
};

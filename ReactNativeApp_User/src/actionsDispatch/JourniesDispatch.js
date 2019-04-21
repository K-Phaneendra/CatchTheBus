import { JOURNIES } from './DispatchTypes';

export const fetchAll = (dispatch, payload) =>
  dispatch({ type: JOURNIES.FETCH_JOURNIES, payload });

export const clearBookJourneyForm = (dispatch, payload) =>
  dispatch({ type: JOURNIES.CLEAR_BOOKJOURNEY_FORM, payload });

export const updateFormFields = (dispatch, payload) =>
  dispatch({ type: JOURNIES.UPDATE_FORM_FIELDS, payload });

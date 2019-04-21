import { cloneDeep } from 'lodash';
import { JOURNIES } from '../actionsDispatch/DispatchTypes';

const initialState = {
  journies: [],
  bookJourneyForm: {}
};

const resetBookJourneyForm = {
  routeMapId: '',
  stops: [],
  location: '',
  idCard: '',
  name: '',
  mobile: ''
};

const updateFormFields = (state, action) => {
  const bookJourneyForm = cloneDeep(state.bookJourneyForm);
  console.log('action', action, bookJourneyForm);
  bookJourneyForm[action.payload.key] = action.payload.text;
  return { ...state, bookJourneyForm };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case JOURNIES.FETCH_JOURNIES: {
      const { data } = action.payload;
      return { ...state, journies: data.journies };
    }
    case JOURNIES.CLEAR_BOOKJOURNEY_FORM: {
      const reset = resetBookJourneyForm;
      reset.routeMapId = action.payload.routeMapId;
      reset.stops = action.payload.stops;
      return { ...state, bookJourneyForm: reset };
    }
    case JOURNIES.UPDATE_FORM_FIELDS: {
      return updateFormFields(state, action);
    }
    default: {
      return state;
    }
  }
}

import { JOURNIES } from '../actionsDispatch/DispatchTypes';

const initialState = {
  journies: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case JOURNIES.FETCH_JOURNIES: {
      const { data } = action.payload;
      return { ...state, journies: data.journies };
    }
    default: {
      return state;
    }
  }
}

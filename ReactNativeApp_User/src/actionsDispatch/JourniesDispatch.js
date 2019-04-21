import { JOURNIES } from './DispatchTypes';

export const fetchAll = (dispatch, payload) =>
  dispatch({ type: JOURNIES.FETCH_JOURNIES, payload });

import { API_GET, API_POST } from './APIMethods';
import { JOURNIES } from './ActionURLs';

export const fetchJournies = async () => {
  const url = JOURNIES.FETCH_JOURNIES;
  const APIResponse = API_GET(url);
  try {
    const data = await APIResponse;
    return data;
  } catch (error) {
    return error;
  }
};

export const submitJourneyForm = async (data, routeMapId, locationId) => {
  const url = `${JOURNIES.SUBMIT_JOURNEY_FORM}/${routeMapId}/${locationId}`;
  const APIResponse = API_POST(url, data);
  try {
    const data = await APIResponse;
    return data;
  } catch (error) {
    return error;
  }
};

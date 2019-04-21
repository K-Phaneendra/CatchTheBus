import { API_GET } from './APIMethods';
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

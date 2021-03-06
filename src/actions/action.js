import axios from 'axios';

export const SEARCH = 'SEARCH';

/**
 * Open weather API
 */
const URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = '4743eefc9dd1e3fc255f055299c0620d';

export const search = (term = 'Florianópolis') => {
    const encodedTerm = encodeURI(term);
    const request = axios.get(`${URL}?q=${encodedTerm}&appid=${API_KEY}`);

    return dispatch => {
        dispatch({
            type: SEARCH,
            fetching: true,
            payload: request,
            error: false,
            term
        });

        return request.then((response) => dispatch({
            type: SEARCH,
            fetching: false,
            payload: response.data,
            error: false,
            term
        })).catch((error) => {
          return dispatch({
            type: SEARCH,
            fetching: false,
            payload: error,
            error: true,
            term
          })
        });
    }
}

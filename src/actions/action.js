import axios from 'axios';

export const SEARCH = 'SEARCH';

/**
 * Open Whether API
 */
const URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = '4743eefc9dd1e3fc255f055299c0620d';

export const search = (term = 'Florianópolis') => {
    const request = axios.get(`${URL}?q=${term}&appid=${API_KEY}`);

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
            payload: response,
            error: false,
            term
        })).catch((error) => dispatch({
            type: SEARCH,
            fetching: false,
            payload: error,
            error: true,
            term
        }))
    }
}

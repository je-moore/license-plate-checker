import { countries } from '../lib/countries'

export const SET_PLATE_DATA = 'SET_PLATE_DATA'

export const fetchPlateData = (plateNumber, country) => (dispatch) => {
  countries[country].fetchData(plateNumber)
    .then(result => dispatch({
      type: SET_PLATE_DATA,
      payload: result
    }))
    .catch(err => alert(err))
}

export function clearPlateData(plateNumber, country) {
  return {
    type: SET_PLATE_DATA,
    payload: null
  }
}
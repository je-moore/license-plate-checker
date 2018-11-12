import * as request from 'superagent'

export const SET_PLATE = 'SET_PLATE'
export const SET_PLATE_DATA = 'SET_PLATE_DATA'

export function setPlate(plateNumber, country) {
  return {
    type: SET_PLATE,
    payload: {
      plateNumber,
      country
    }
  }
}

export const fetchPlateData = (plateNumber) => (dispatch) => {
  request(`https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${plateNumber}`)
    .then(response => dispatch({
      type: SET_PLATE_DATA,
      payload: response.body[0]
    }))
    .catch(err => alert(err))
}

export function clearPlateData(plateNumber, country) {
  return {
    type: SET_PLATE_DATA,
    payload: null
  }
}
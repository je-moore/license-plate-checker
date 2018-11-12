import * as request from 'superagent'

export function fetchData(plateNumber) {
  return request(`https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${plateNumber}`).then( normalize )
}

function normalize(response) {
  let normalizedData = response.body[0]
  normalizedData.land = 'NL'
  normalizedData.kenteken_hyphenated = addHyphens(normalizedData.kenteken)
  console.log(normalizedData)
  return normalizedData
}

function addHyphens(plateDigits) {
  return plateDigits.slice(0, 2) + '-' + plateDigits.slice(2, 4) + '-' + plateDigits.slice(4)
}

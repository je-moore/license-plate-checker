export function fetchData(plateNumber) {
  return normalize(plateNumber)
}

function normalize(plateNumber) {
  const normalizedData = {
    display: {
      land: 'FR',
      kenteken_hyphenated: addHyphens(plateNumber)
    },
    listing: null
  }
  return Promise.resolve(normalizedData)
}


function addHyphens(plateDigits) {
  return plateDigits.slice(0, 2) + '-' + plateDigits.slice(2, 5) + '-' + plateDigits.slice(5)
}

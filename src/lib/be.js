export function fetchData(plateNumber) {
  return normalize(plateNumber)
}

function normalize(plateNumber) {
  const normalizedData = {
    display: {
      land: 'BE',
      kenteken_hyphenated: addHyphens(plateNumber)
    },
    listing: null
  }
  return Promise.resolve(normalizedData)
}

function addHyphens(plateDigits) {
  return plateDigits.slice(0, 1) + '-' + plateDigits.slice(1, 4) + '-' + plateDigits.slice(4)
}
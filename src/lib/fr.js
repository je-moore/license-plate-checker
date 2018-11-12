export function fetchData(plateNumber) {
  return normalize(plateNumber)
}

function normalize(plateNumber) {
  let normalizedData = {
    land: 'FR',
    kenteken_hyphenated: addHyphens(plateNumber)
  }
  console.log(normalizedData)
  return Promise.resolve(normalizedData)
}

function addHyphens(plateDigits) {
  return plateDigits.slice(0, 2) + '-' + plateDigits.slice(2, 5) + '-' + plateDigits.slice(5)
}

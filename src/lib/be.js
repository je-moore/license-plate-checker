export function fetchData(plateNumber) {
  return normalize(plateNumber)
}

function normalize(plateNumber) {
  let normalizedData = {
    land: 'BE',
    kenteken_hyphenated: addHyphens(plateNumber)
  }
  console.log(normalizedData)
  return Promise.resolve(normalizedData)
}

function addHyphens(plateDigits) {
  return plateDigits.slice(0, 1) + '-' + plateDigits.slice(1, 4) + '-' + plateDigits.slice(4)
}

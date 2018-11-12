import * as request from 'superagent'

export function fetchData(plateNumber) {
  return request(`https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${plateNumber}`).then( normalize )
}

function normalize(response) {
  const data = response.body[0]
  const normalizedData = {
    display: {
      land: 'NL',
      kenteken_hyphenated: addHyphens(data.kenteken)
    },
    listing: {
      'Aantal Cilinders': data.aantal_cilinders,
      'Aantal Deuren': data.aantal_deuren,
      'Aantal Rolstoelplaatsen': data.aantal_rolstoelplaatsen,
      'Aantal Wielen': data.aantal_wielen,
      'Aantal Zitplaatsen': data.aantal_zitplaatsen,
      'Datum Eerste Afgifte': data.datum_eerste_afgifte_nederland,
      'Datum Eerste Toelating': data.datum_eerste_toelating,
      'Datum Tenaamstelling': data.datum_tenaamstelling,
      'Eerste Kleur': data.eerste_kleur,
      'Inrichting': data.inrichting,
      'Lengte': data.lengte,
      'Massa Ledig Voertuig': data.massa_ledig_voertuig,
      'Merk': data.merk,
      'Verzekerd': data.wam_verzekerd
    }
  }
  return normalizedData
}

function addHyphens(plateDigits) {
  return plateDigits.slice(0, 2) + '-' + plateDigits.slice(2, 4) + '-' + plateDigits.slice(4)
}

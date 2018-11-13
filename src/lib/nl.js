import * as request from "superagent";
import * as moment from "moment";

export function fetchData(plateNumber) {
  return request(
    `https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${encodeURI(
      plateNumber
    )}`
  ).then(normalize);
}

function normalize(response) {
  console.log('response', response)
  if (response === undefined) return null
  if (response.body.length === 0) return null

  const data = response.body[0];
  const normalizedData = {
    display: {
      land: "NL",
      kenteken_hyphenated: addHyphens(
        data.kenteken,
        data.datum_eerste_afgifte_nederland,
        data.voertuigsoort
      )
    },
    listing: {
      "Aantal Cilinders": data.aantal_cilinders,
      "Aantal Deuren": data.aantal_deuren,
      "Aantal Rolstoelplaatsen": data.aantal_rolstoelplaatsen,
      "Aantal Wielen": data.aantal_wielen,
      "Aantal Zitplaatsen": data.aantal_zitplaatsen,
      "Datum Eerste Afgifte": data.datum_eerste_afgifte_nederland,
      "Datum Eerste Toelating": data.datum_eerste_toelating,
      "Datum Tenaamstelling": data.datum_tenaamstelling,
      "Eerste Kleur": data.eerste_kleur,
      Inrichting: data.inrichting,
      Lengte: data.lengte,
      "Massa Ledig Voertuig": data.massa_ledig_voertuig,
      Merk: data.merk,
      Verzekerd: data.wam_verzekerd
    }
  };
  console.log(data);
  return normalizedData;
}



// hyphen logic adapted from https://nl.wikipedia.org/wiki/Nederlands_kenteken

function addHyphens(plateDigits, afgifte, voertuigsoort) {

  const hyphens = lookUpHyphens(afgifte, voertuigsoort);

  return (
    plateDigits.slice(0, hyphens[0]) +
    "-" +
    plateDigits.slice(hyphens[0], hyphens[1]) +
    "-" +
    plateDigits.slice(hyphens[1])
  );

}


function lookUpHyphens(afgifte, voertuigsoort) {

  const hyphenPositions = {
    Personenauto: {
      "30-03-2015": [2, 5],
      "05-03-2013": [1, 4],
      "19-05-1988": [2, 5],
    },
    Bromfiets: {
      "16-01-2015": [3, 5],
      "11-08-2006": [1, 4],
      "01-09-2005": [2, 5],
    }
  }

  if ( !Object.keys( hyphenPositions ).includes(voertuigsoort) ) {
    return [2, 4];
  }

  const plateDate = moment(afgifte, ['DD/MM/YYYY']);
  const formatDates = Object.keys( hyphenPositions[voertuigsoort] ).map(
    dateString => moment(dateString, ['DD-MM-YYYY'])
  ).sort(function (a, b) {
    return b - a;
  });

  for (let date of formatDates) {
    if ( plateDate.isSameOrAfter( date ) ) {
      return hyphenPositions[voertuigsoort][ date.format('DD-MM-YYYY') ]
    }
  }

  return [2, 4];

}

// ZBLH89

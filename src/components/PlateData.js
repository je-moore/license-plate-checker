import * as React from 'react'

export default function PlateData(props) {
  if (!props.plateData ) return ''
  return (<div className="plate-data">
    <ul>
      <li className="plate-datum"><span className="plate-datum-label">Aantal Cilinders</span>: { props.plateData.aantal_cilinders }</li>
      <li className="plate-datum"><span className="plate-datum-label">Aantal Deuren</span>: { props.plateData.aantal_deuren }</li>
      <li className="plate-datum"><span className="plate-datum-label">Aantal Rolstoelplaatsen</span>: { props.plateData.aantal_rolstoelplaatsen }</li>
      <li className="plate-datum"><span className="plate-datum-label">Aantal Wielen</span>: { props.plateData.aantal_wielen }</li>
      <li className="plate-datum"><span className="plate-datum-label">Aantal Zitplaatsen</span>: { props.plateData.aantal_zitplaatsen }</li>
      <li className="plate-datum"><span className="plate-datum-label">Datum Eerste_afgifte_nederland</span>: { props.plateData.datum_eerste_afgifte_nederland }</li>
      <li className="plate-datum"><span className="plate-datum-label">Datum Eerste_toelating</span>: { props.plateData.datum_eerste_toelating }</li>
      <li className="plate-datum"><span className="plate-datum-label">Datum Tenaamstelling</span>: { props.plateData.datum_tenaamstelling }</li>
      <li className="plate-datum"><span className="plate-datum-label">Eerste Kleur</span>: { props.plateData.eerste_kleur }</li>
      <li className="plate-datum"><span className="plate-datum-label">Inrichting</span>: { props.plateData.inrichting }</li>
      <li className="plate-datum"><span className="plate-datum-label">Lengte</span>: { props.plateData.lengte }</li>
      <li className="plate-datum"><span className="plate-datum-label">Massa Ledig Voertuig</span>: { props.plateData.massa_ledig_voertuig }</li>
      <li className="plate-datum"><span className="plate-datum-label">Merk</span>: { props.plateData.merk }</li>
      <li className="plate-datum"><span className="plate-datum-label">Verzekerd</span>: { props.plateData.wam_verzekerd }</li>
    </ul>
  </div>)
}
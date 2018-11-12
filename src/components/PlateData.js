import * as React from 'react'
import './style/PlateData.css'

export default function PlateData(props) {
  if (!props.plateData ) return ''
  if ( props.plateData === 'undefined' ) return (<div className="plate-data-not-found">No Records Found For This Plate</div>)
  return (<div className="plate-data">
    <ul>
      <li className="plate-datum"><span className="plate-datum-label">Aantal Cilinders</span><span className="plate-datum-value">{ props.plateData.aantal_cilinders }</span></li>
      <li className="plate-datum"><span className="plate-datum-label">Aantal Deuren</span><span className="plate-datum-value">{ props.plateData.aantal_deuren }</span></li>
      <li className="plate-datum"><span className="plate-datum-label">Aantal Rolstoelplaatsen</span><span className="plate-datum-value">{ props.plateData.aantal_rolstoelplaatsen }</span></li>
      <li className="plate-datum"><span className="plate-datum-label">Aantal Wielen</span><span className="plate-datum-value">{ props.plateData.aantal_wielen }</span></li>
      <li className="plate-datum"><span className="plate-datum-label">Aantal Zitplaatsen</span><span className="plate-datum-value">{ props.plateData.aantal_zitplaatsen }</span></li>
      <li className="plate-datum"><span className="plate-datum-label">Datum Eerste Afgifte</span><span className="plate-datum-value">{ props.plateData.datum_eerste_afgifte_nederland }</span></li>
      <li className="plate-datum"><span className="plate-datum-label">Datum Eerste Toelating</span><span className="plate-datum-value">{ props.plateData.datum_eerste_toelating }</span></li>
      <li className="plate-datum"><span className="plate-datum-label">Datum Tenaamstelling</span><span className="plate-datum-value">{ props.plateData.datum_tenaamstelling }</span></li>
      <li className="plate-datum"><span className="plate-datum-label">Eerste Kleur</span><span className="plate-datum-value">{ props.plateData.eerste_kleur }</span></li>
      <li className="plate-datum"><span className="plate-datum-label">Inrichting</span><span className="plate-datum-value">{ props.plateData.inrichting }</span></li>
      <li className="plate-datum"><span className="plate-datum-label">Lengte</span><span className="plate-datum-value">{ props.plateData.lengte }</span></li>
      <li className="plate-datum"><span className="plate-datum-label">Massa Ledig Voertuig</span><span className="plate-datum-value">{ props.plateData.massa_ledig_voertuig }</span></li>
      <li className="plate-datum"><span className="plate-datum-label">Merk</span><span className="plate-datum-value">{ props.plateData.merk }</span></li>
      <li className="plate-datum"><span className="plate-datum-label">Verzekerd</span><span className="plate-datum-value">{ props.plateData.wam_verzekerd }</span></li>
    </ul>
  </div>)
}
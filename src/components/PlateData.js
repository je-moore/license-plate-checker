import * as React from 'react'
import './style/PlateData.css'

export default function PlateData(props) {
  if ( !props.plateData ) return ''
  if ( !props.plateData.listing ) return (<div className="plate-data-not-found">No Records Found For This Plate</div>)
  return (<div className="plate-data">
    <ul>

      { Object.keys(props.plateData.listing).map( (label, i) => 
        (<li key={i} className="plate-datum">
          <span className="plate-datum-label">{ label }</span><span className="plate-datum-value">{ props.plateData.listing[label] }</span>
        </li>) 
      )}

    </ul>

  </div>)
}
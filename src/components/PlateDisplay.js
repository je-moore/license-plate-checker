import * as React from 'react'
import './style/PlateDisplay.css'

export default function PlateDisplay(props) {
  if (!props.plate) return ''
  return (<div className={ `plate-display plate-display-${props.plate.country}` }>
    { props.addDashes(props.plate.plateNumber, props.plate.country) }
  </div>)
}

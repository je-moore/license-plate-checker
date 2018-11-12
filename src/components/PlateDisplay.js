import * as React from 'react'
import './style/PlateDisplay.css'

export default function PlateDisplay(props) {
  if (!props.plateData) return ''
  return (<div className={ `plate-display plate-display-${props.plateData.land}` }>
    { props.plateData.kenteken_hyphenated }
  </div>)
}

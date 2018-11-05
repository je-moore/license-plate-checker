import * as React from 'react'
import './style/PlateDisplay.css';

export default function PlateDisplay(props) {
  if (!props.plate) return ''
  return (<div className={ `plate-display plate-display-BE` }>
    <span className="plate-display-number">ZBLH89</span>
  </div>)
}

// export default function PlateDisplay(props) {
//   if (!props.plate) return ''
//   return (<div className={ `plate-display plate-country-${props.plate.land}` }>
//     {props.plate.kenteken}
//   </div>)
// }

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { setPlate, fetchPlateData, clearPlateData } from '../actions/plates'
import PlateCheckerForm from './PlateCheckerForm'
import PlateDisplay from './PlateDisplay'
import PlateData from './PlateData'

class PlateChecker extends PureComponent {

  render() {
    return (
      <div className="plateChecker">
        <PlateCheckerForm setPlate={this.props.setPlate} fetchPlateData={this.props.fetchPlateData} clearPlateData={this.props.clearPlateData} />
        <PlateDisplay plateData={this.props.plateData} />
        <PlateData plateData={this.props.plateData} />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    plate: state.plate,
    plateData: state.plateData 
  }
}

export default connect(mapStateToProps, { setPlate, fetchPlateData, clearPlateData })(PlateChecker)

import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { setPlate, fetchPlateData, clearPlateData } from '../actions/plates'
import PlateCheckerForm from './PlateCheckerForm';
import PlateDisplay from './PlateDisplay';
import PlateData from './PlateData';

class PlateChecker extends PureComponent {

  addDashes = (plateNumber, country) => {
    if (country === 'NL') {
      return plateNumber.slice(0, 2) + '-' + plateNumber.slice(2, 4) + '-' + plateNumber.slice(4)
    }
    if (country === 'BE') {
      return plateNumber.slice(0, 1) + '-' + plateNumber.slice(1, 4) + '-' + plateNumber.slice(4)
    }
    if (country === 'FR') {
      return plateNumber.slice(0, 2) + '-' + plateNumber.slice(2, 5) + '-' + plateNumber.slice(5)
    }
    return plateNumber
  }

  render() {
    return (
      <div className="plateChecker">
        <PlateCheckerForm setPlate={this.props.setPlate} fetchPlateData={this.props.fetchPlateData} clearPlateData={this.props.clearPlateData} />
        <PlateDisplay plate={this.props.plate} plateData={this.props.plateData} addDashes={this.addDashes} />
        <PlateData plate={this.props.plate} plateData={this.props.plateData} />
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

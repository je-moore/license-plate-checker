import React, { PureComponent } from 'react'
import './style/PlateCheckerForm.css'

class PlateCheckerForm extends PureComponent {

  state = {
    plateNumber: '',
    country: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log( 'plate number is not valid' )

    if (this.plateNumberIsValid(this.state.plateNumber)) {
      this.setState({errorMessage: ''})
      this.props.setPlate(this.state.plateNumber, this.state.country)
      if (this.state.country === 'NL' ) {
        this.props.fetchPlateData(this.state.plateNumber)
      } else {
        this.props.clearPlateData()
      }
    }
    else {
      this.setState({errorMessage: 'Please enter a valid License Plate Number.'})
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  plateNumberIsValid = (plateNumber) => {
    if (plateNumber.length > 9 || plateNumber.length < 6) {
      return false
    }
    let i = plateNumber.length;
    while (i--) {
      if ( !/[0-9,A-Z]/.test( plateNumber.charAt(i) ) ) {
        return false        
      }
    }
    return true
  }

  render() {
    return (<form onSubmit={this.handleSubmit}>
      <label>
        License Plate Number:
        <input type="text" name="plateNumber" value={this.state.plateNumber} onChange={this.handleChange} />
      </label>
      <label>
        Country:
         <select name="country" value={this.state.country} onChange={this.handleChange} >
          <option value=""> --select-- </option>
          <option value="BE">België</option>
          <option value="FR">Frankrijk</option>
          <option value="NL">Nederland</option>
        </select> 
      </label>
      <button type="submit">Check</button>
      <div className="errorMessage">{this.state.errorMessage}</div>
    </form>)
  }

}

export default PlateCheckerForm;

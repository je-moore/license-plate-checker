import React, { PureComponent } from 'react';

class PlateCheckerForm extends PureComponent {

  state = {
    plateNumber: '',
    country: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.setPlate(this.state.plateNumber, this.state.country)
    if (this.state.plateNumber && this.state.country === 'NL' ) {
      this.props.fetchPlateData(this.state.plateNumber)
    } else {
      this.props.clearPlateData()
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
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
    </form>)
  }

}

export default PlateCheckerForm;

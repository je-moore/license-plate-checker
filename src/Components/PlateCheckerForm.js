import React, { PureComponent } from 'react';

class PlateCheckerForm extends PureComponent {

  state = {
    plateNumber: '',
    country: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
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
          <option value="NL">Netherlands</option>
        </select> 
      </label>
      <button type="submit">Check</button>
    </form>)
  }

}

export default PlateCheckerForm;

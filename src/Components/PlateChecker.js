import React, { PureComponent } from 'react';
import PlateCheckerForm from './PlateCheckerForm';
import PlateDisplay from './PlateDisplay';

class PlateChecker extends PureComponent {
  render() {
    return (
      <div className="PlateChecker">
        ZBLH89
        <PlateCheckerForm />
        <PlateDisplay />
      </div>
    );
  }
}
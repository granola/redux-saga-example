import React from 'react';
import { connect } from 'react-redux';

class Area extends React.Component {
  render() {
    return (
      <div className="area" onClick={() => {console.log("click area")}}></div>
    )
  }
}

export default connect(() => {})(Area);

import React from 'react';
import { connect } from 'react-redux';
import { addArea, removeArea } from '../actions';

class Area extends React.Component {
  render() {
    return (
      <div>
        <button className="button" type="button" onClick={this.props.addArea}>add</button>
        <button className="button" type="button" onClick={this.props.removeArea}>remove</button>
        <div className="area"></div>
      </div>
    )
  }
}

// const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<Object>) => ({
  addArea: () => dispatch(addArea()),
  removeArea: () => dispatch(removeArea()),
});

export default connect(null, mapDispatchToProps)(Area);

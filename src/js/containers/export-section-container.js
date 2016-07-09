import React from 'react';
import { connect } from 'react-redux';
import changeVariable from '../actions/variable-change-action';
import Export from '../components/export-component';


class SectionExport extends React.Component {
  render() {
    return (
      <div className='export-wrapper'>
        <Export exportedVariables={this.props.exportedVariables} chosenColors={this.props.chosenColors} changeVariable={this.props.changeVariable} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    exportedVariables: state.exportedVariables,
    chosenColors: state.chosenColors
  }
}

export default connect(mapStateToProps, {changeVariable: changeVariable})(SectionExport);

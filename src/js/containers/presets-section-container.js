import React from 'react';
import { connect } from 'react-redux';
import Presets from '../components/presets-component';
import ColorBlock from '../components/main-color-block';
import addColor from '../actions/color-add-action';
import deleteColor from '../actions/color-delete-action';
import fetchData from '../actions/get-data-action';

class SectionPresets extends React.Component {

  render() {
    return (
      <section className="section presets-section">

      <ColorBlock section='Explore' chosenColors={this.props.chosenColors} presetColors={this.props.presetColors} exploredColors={this.props.exploredColors} schemedColors={this.props.schemedColors} mixedColors={this.props.mixedColors} deleteColor={this.props.deleteColor} />

      <Presets presetColors={this.props.presetColors} chosenColors={this.props.chosenColors} fetchData={this.props.fetchData} addColor={this.props.addColor} deleteColor={this.props.deleteColor} />

      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    presetColors: state.presetColors,
    exploredColors: state.exploredColors,
    chosenColors: state.chosenColors,
    schemedColors: state.schemedColors,
    mixedColors: state.mixedColors
  }
}

export default connect(mapStateToProps, {fetchData: fetchData, addColor: addColor, deleteColor: deleteColor})(SectionPresets);

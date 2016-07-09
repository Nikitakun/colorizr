import React from 'react';
import { connect } from 'react-redux';
import addColor from '../actions/color-add-action';
import deleteColor from '../actions/color-delete-action';
import Explore from '../components/explore-component';
import fetchData from '../actions/get-data-action';
import ColorBlock from '../components/main-color-block';


class SectionExplore extends React.Component {

  render() {
    return (
      <section className="section explore-section">

        <h1 className="main-heading">Explore presets</h1>

        <ColorBlock section='Explore' chosenColors={this.props.chosenColors} exploredColors={this.props.exploredColors} schemedColors={this.props.schemedColors} mixedColors={this.props.mixedColors} presetColors={this.props.presetColors} deleteColor={this.props.deleteColor} />

        <Explore exploredColors={this.props.exploredColors} fetchData={this.props.fetchData} chosenColors={this.props.chosenColors} schemedColors={this.props.schemedColors} mixedColors={this.props.mixedColors} presetColors={this.props.presetColors} addColor={this.props.addColor} deleteColor={this.props.deleteColor} />

      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    exploredColors: state.exploredColors,
    chosenColors: state.chosenColors,
    schemedColors: state.schemedColors,
    mixedColors: state.mixedColors,
    presetColors: state.presetColors
  }
}

export default connect(mapStateToProps, {fetchData: fetchData, addColor: addColor, deleteColor: deleteColor})(SectionExplore);

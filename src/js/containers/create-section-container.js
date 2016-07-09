import React from 'react';
import { connect } from 'react-redux';
import deleteColor from '../actions/color-delete-action';
import addColor from '../actions/color-add-action';
import mixColor from '../actions/color-mix-action';
import colorChange from '../actions/color-change-action';
import ColorPicker from '../components/colorpicker';
import ColorBlock from '../components/main-color-block';
import SchemedColorBlock from '../components/schemed-color-block';
import MixedColorBlock from '../components/mixed-color-block';

class SectionCreate extends React.Component {

  render() {
    return (
      <section className="section create-section" style={{backgroundColor: this.props.pageColors.color}}>

        <h1 className="main-heading" style={{color: this.props.pageColors.brightness}}>Choose your color</h1>

        <div className="colorpick">
          <div className="colorpicker">
            <ColorPicker action={this.props.colorChange} type='Main' chosenColors={this.props.chosenColors} />
          </div>
        </div>

        <ColorBlock section='Create' chosenColors={this.props.chosenColors} schemedColors={this.props.schemedColors} mixedColors={this.props.mixedColors} exploredColors={this.props.exploredColors} presetColors={this.props.presetColors} deleteColor={this.props.deleteColor} />

        <SchemedColorBlock schemedColors={this.props.schemedColors} colorChange={this.props.colorChange} addColor={this.props.addColor} chosenColors={this.props.chosenColors} mixedColors={this.props.mixedColors} exploredColors={this.props.exploredColors} presetColors={this.props.presetColors} deleteColor={this.props.deleteColor} />

        <MixedColorBlock mixColor={this.props.mixColor} addColor={this.props.addColor} mixedColors={this.props.mixedColors} chosenColors={this.props.chosenColors} schemedColors={this.props.schemedColors} exploredColors={this.props.exploredColors} presetColors={this.props.presetColors} deleteColor={this.props.deleteColor} />

      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    pageColors: state.pageColors,
    chosenColors: state.chosenColors,
    schemedColors: state.schemedColors,
    mixedColors: state.mixedColors,
    exploredColors: state.exploredColors,
    presetColors: state.presetColors
  }
}

function mapDispatchToProps(dispatch) {
  return {
    colorChange: (currColor, chosenColors) => {
      dispatch(colorChange(currColor, chosenColors))
    },
    addColor: (amount, color, panelType, panelIndex, chosenAmount) => {
      dispatch(addColor(amount, color, panelType, panelIndex, chosenAmount))
    },
    deleteColor: (amount, chosenIndex, chosenColors, colorsToCompare) => {
      dispatch(deleteColor(amount, chosenIndex, chosenColors, colorsToCompare))
    },
    mixColor: (mixingColor) => {
      dispatch(mixColor(mixingColor))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionCreate);

import React from 'react';
import ColorPicker from './colorpicker';

export default class MixedColorBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picker: 'none',
      background: '#ffffff',
      additionalColor: '#000000',
      buttonBack: '#B0BDFF',
      removeButton: 'none'
    };
    this.pickerChange = this.pickerChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.mixedColors.chosen).length === 10) {
      this.setState({removeButton: 'inline-block'});
    } else if (this.state.removeButton) {
      this.setState({removeButton: 'none'});
    }
  }

  pickerChange() {
    this.state.picker === 'none' ? this.setState({picker: 'block'}) : this.setState({picker: 'none'});
  }

  add(amount, i, color) {
    this.props.addColor(amount, color, {mixed: true}, i, this.props.chosenColors.colors.length);
  }

  delete(amount, chosenIndex) {
    if (this.props.chosenColors.exploreType && this.props.chosenColors.presetType) {
      this.props.deleteColor(amount, chosenIndex, this.props.chosenColors.colors, {schemedArray: this.props.schemedColors.array, mixArray: this.props.mixedColors.array, exploreArray: this.props.exploredColors[this.props.chosenColors.exploreType].colors, exploreType: this.props.chosenColors.exploreType, presetArray: this.props.presetColors[this.props.chosenColors.presetType].colors, presetType: this.props.chosenColors.presetType});
    } else if (this.props.chosenColors.exploreType)  {
        this.props.deleteColor(amount, chosenIndex, this.props.chosenColors.colors, {schemedArray: this.props.schemedColors.array, mixArray: this.props.mixedColors.array, exploreArray: this.props.exploredColors[this.props.chosenColors.exploreType].colors, exploreType: this.props.chosenColors.exploreType});
      } else if (this.props.chosenColors.presetType) {
          this.props.deleteColor(amount, chosenIndex, this.props.chosenColors.colors, {schemedArray: this.props.schemedColors.array, mixArray: this.props.mixedColors.array, presetArray: this.props.presetColors[this.props.chosenColors.presetType].colors, presetType: this.props.chosenColors.presetType});
      }
        else {
            this.props.deleteColor(amount, chosenIndex, this.props.chosenColors.colors, {schemedArray: this.props.schemedColors.array, mixArray: this.props.mixedColors.array});
          }
  }

  generateItems() {
    let itemsObj = this.props.mixedColors;
    let reactArray = [];

    itemsObj.array.forEach((item, i) => {
      let chosen = itemsObj.chosen[i] === undefined ? undefined : `${itemsObj.chosen[i]}`;
      let nameOfClass = chosen ? "color-list__item color-list__item-chosen mixed-colors__item" : "color-list__item mixed-colors__item";
      let clickFunction = chosen ? () => this.delete('single', +chosen) : () => this.add('single', i, item);
      reactArray.push(
        <li className={nameOfClass} style={{backgroundColor: item}} key={`mixed ${i}`} onClick={() => clickFunction()}>
          <span className="add-button" key={`mixed-add ${i}`}></span>
        </li>
      )
    });

    return reactArray;
  }

  backChange(evt) {
    evt.preventDefault();
    this.state.background === '#ffffff' ? this.setState({background: '#000000', additionalColor: '#ffffff', buttonBack: '#384aa2'}) : this.setState({background: '#ffffff', additionalColor: '#000000', buttonBack: '#B0BDFF'});
  }

  render() {
    return (
      <div className="color-block" style={{backgroundColor: this.state.background}}>
        <div className="color-block__heading-block">
          <h2 className="secondary-heading color-block__heading mixed-colors__heading" style={{color: this.state.additionalColor}}>Mixed with</h2>
          <span className="picker" style={{backgroundColor: this.props.mixedColors.array[9]}} onClick={this.pickerChange}></span>
        </div>
        <div className="color-block__colorpicker colorpick" style={{display: this.state.picker}}>
          <ColorPicker action={this.props.mixColor} type='Mix' chosenColors={this.props.chosenColors.colors} />
        </div>
        <ul className="color-list mixed-colors">
          {this.generateItems()}
        </ul>
        <div className="color-list__buttons">
          <button className="color-list__button background-change-button" style={{color: this.state.additionalColor, backgroundColor: this.state.buttonBack}} onClick={(evt) => this.backChange(evt)}>Dark background</button>
          <button className="color-list__button select-all-button" style={{color: this.state.additionalColor, backgroundColor: this.state.buttonBack}} onClick={() => this.add('all', '', this.props.mixedColors.array)}>Select all</button>
          <button className="color-list__button remove-button" style={{display: this.state.removeButton, color: this.state.additionalColor, backgroundColor: this.state.buttonBack}} onClick={() => this.delete('all', '')}>Remove all</button>
        </div>
      </div>

    )
  }

}

import React from 'react';

export default class ColorBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  onClose(index) {
    if (this.props.chosenColors.exploreType && this.props.chosenColors.presetType) {
      this.props.deleteColor('single', index, this.props.chosenColors.colors, {schemedArray: this.props.schemedColors.array, mixArray: this.props.mixedColors.array, exploreArray: this.props.exploredColors[this.props.chosenColors.exploreType].colors, exploreType: this.props.chosenColors.exploreType, presetArray: this.props.presetColors[this.props.chosenColors.presetType].colors, presetType: this.props.chosenColors.presetType});
    } else if (this.props.chosenColors.exploreType)  {
        this.props.deleteColor('single', index, this.props.chosenColors.colors, {schemedArray: this.props.schemedColors.array, mixArray: this.props.mixedColors.array, exploreArray: this.props.exploredColors[this.props.chosenColors.exploreType].colors, exploreType: this.props.chosenColors.exploreType});
      } else if (this.props.chosenColors.presetType) {
          this.props.deleteColor('single', index, this.props.chosenColors.colors, {schemedArray: this.props.schemedColors.array, mixArray: this.props.mixedColors.array, presetArray: this.props.presetColors[this.props.chosenColors.presetType].colors, presetType: this.props.chosenColors.presetType});
      }
        else {
            this.props.deleteColor('single', index, this.props.chosenColors.colors, {schemedArray: this.props.schemedColors.array, mixArray: this.props.mixedColors.array});
          }
  }

  generateItems() {
    let itemsArray = this.props.chosenColors.colors;
    let reactArray = [];
    for (let i = 0; i < 10; i++) {
      reactArray.push(
        <li
        className={itemsArray[i] ? "color-list__item color-list__item--active picked-colors__item" :  "color-list__item picked-colors__item"}
        style={{backgroundColor: itemsArray[i] || "#eeeeee"}}
        key={`picked ${i}`} ref={`picked ${i}`}  onClick={() => this.onClose(i, itemsArray[i])}>
          <span className="close-button" key={`close ${i}`}></span>
        </li>
      )
    }
    return reactArray;
  }

  render() {
    return (
      <div className="color-block">
        <h2 className="secondary-heading color-block__heading">Select up to ten colors</h2>
        <h3 className="color-block__subheading">Delete colors by clicking on them</h3>
        <ul className="color-list picked-colors">
          {this.generateItems()}
        </ul>
      </div>
    )
  }
}

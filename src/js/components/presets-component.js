import React from 'react';

export default class Presets extends React.Component {

  componentWillMount() {
    if (!Object.keys(this.props.presetColors).length) {
      this.props.fetchData(this.props.chosenColors.colors);
    }
  }

  add(amount, i, color, type) {
    this.props.addColor(amount, color, {preset: true, presetType: type}, i, this.props.chosenColors.colors.length);
  }

  generateItems() {
    let presetObj = this.props.presetColors,
    presetKeys = [],
    presetArray = [],
    generateColors = () => {
      let colorsArray = [];
      let themeName = presetKeys[0];
      presetObj[themeName].colors.forEach((item, i) => {
        colorsArray.push(
          <li className="preset__list-item" key={`preset-color ${i}`} style={{backgroundColor: item}}></li>
        );
      });
      return colorsArray;
    };

    for (let key in presetObj) {
      if (presetObj.hasOwnProperty(key)) {
        presetKeys.push(key);
      }
    }

    if (!presetKeys.length) return [];

    while(presetKeys.length) {
      let themeName = presetKeys[0];
      let item = presetObj[themeName].colors;
      let chosen = presetObj[themeName].chosen ? `${presetObj[themeName].chosen}` : undefined;
      let className = chosen ? "preset__list preset__list-active" : "preset__list";
      let clickFunction = chosen ? () => {return;} : () => this.add('multiple', '', item, themeName);
      presetArray.push(
        <div className="preset color-block" onClick={clickFunction} key={`preset-item ${presetKeys.length}`}>
          <h2 className="secondary-heading preset__heading">{presetKeys[0]}</h2>
          <ul className={className}>
            {generateColors()}
          </ul>
        </div>
      );
      presetKeys.shift();
    }
    return presetArray;
  }

  render() {
    return (
      <div className='preset-wrapper'>
        {this.generateItems()}
      </div>
    )
  }
}

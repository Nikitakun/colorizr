import React from 'react';

export default class Explore extends React.Component {

  componentWillMount() {
    if (!Object.keys(this.props.exploredColors).length) {
      this.props.fetchData(this.props.chosenColors.colors);
    }
  }

  add(amount, i, color, type) {
    this.props.addColor(amount, color, {explore: true, exploreType: type}, i, this.props.chosenColors.colors.length);
  }

  delete(amount, chosenIndex, type) {
    if (this.props.chosenColors.presetType) {
      this.props.deleteColor(amount, chosenIndex, this.props.chosenColors.colors, {schemedArray: this.props.schemedColors.array, mixArray: this.props.mixedColors.array, exploreArray: this.props.exploredColors[type].colors, exploreType: type, presetArray: this.props.presetColors[this.props.chosenColors.presetType].colors, presetType: this.props.chosenColors.presetType});
    } else {
        this.props.deleteColor(amount, chosenIndex, this.props.chosenColors.colors, {schemedArray: this.props.schemedColors.array, mixArray: this.props.mixedColors.array, exploreArray: this.props.exploredColors[type].colors, exploreType: type});
      }
  }

  generateItems() {
    let exploreObj = this.props.exploredColors,
    exploreKeys = [],
    exploreArray = [],
    generateColors = () => {
      let colorsArray = [];
      let themeName = exploreKeys[0];
      exploreObj[themeName].colors.forEach((item, i) => {
        let chosen = exploreObj[themeName].chosen[i] === undefined ? undefined : `${exploreObj[themeName].chosen[i]}`;
        let className = chosen ? "theme__list-item theme__list-item-active" : "theme__list-item";
        let clickFunction = chosen ? () => this.delete('single', +chosen, themeName) : () => this.add('single', i, item, themeName);
        colorsArray.push(
          <li className={className} key={`explore-color ${i}`} onClick={clickFunction}>
            <div className="pattern">
              <span className="pattern__color" style={{backgroundColor: item}}></span>
              <p className="pattern__color-description">{item}</p>
            </div>
          </li>
        );
      });
      return colorsArray;
    };

    for (let key in exploreObj) {
      if (exploreObj.hasOwnProperty(key)) {
        exploreKeys.push(key);
      }
    }

    if (!exploreKeys.length) return [];

    while(exploreKeys.length) {
      exploreArray.push(
        <div className="theme" key={`explore-item ${exploreKeys.length}`}>
          <h2 className="secondary-heading theme__heading">{exploreKeys[0]}</h2>
          <ul className="theme__list">
            {generateColors()}
          </ul>
        </div>
      );
      exploreKeys.shift();
    }
    return exploreArray;
  }

  render() {
    return (
      <div className='explore-wrapper'>
        {this.generateItems()}
      </div>
    )
  }
}

import React from 'react';
import { toHex, toRGB, toRGBString } from '../storage/functionality-storage';

export default class Export extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {},
      button: 'less'
    }
  }

  componentWillMount() {
      if (this.props.exportedVariables.values[this.props.chosenColors.colors.length]) {
        this.setState(Object.assign({values: {}, button: 'less'}, {values: this.props.exportedVariables.values}));
      } else {
          let elementsNumber = this.props.chosenColors.colors.length;
          for (let i = elementsNumber; i > 0; i--) {
            this.props.changeVariable(`color ${i}`, i, this.props.chosenColors.colors[i - 1]);
            this.setState(Object.assign(this.state.values, {[i]: `color ${i}`}));
          }
      }
  }

  onChange(evt, index, color) {
    let value = evt.target.value;
    this.props.changeVariable(value, index, color);
    this.setState(Object.assign(this.state.values, {[index]: value}));
  }

  generateTable() {
    let chosenColors = this.props.chosenColors.colors,
    tableArray = [];
    chosenColors.forEach((color, index) => {
      let isHex = color.match(/#/);
      let hexValue = isHex ? color : toHex(color);
      let rgb = isHex ? toRGB(color) : null;
      let rgbValue = isHex ? toRGBString(rgb[0], rgb[1], rgb[2]) : color;
      tableArray.push(
        <tr className="export-table__row" key={`export-table ${index}`}>
          <td className="export-table__color export-table__cell">
            <div className="export-table__color-fill" style={{backgroundColor: color}}>
            </div>
          </td>
          <td className="export-table__color-hex export-table__cell" ref={`hex${index}`}>{hexValue}</td>
          <td className="export-table__color-rgb export-table__cell">{rgbValue}</td>
          <td className="export-table__variable export-table__cell">
            <input type="text" className="export-table__variable-input" value={this.state.values[++index]} onChange={(evt) => this.onChange(evt, index, hexValue)} />
          </td>
        </tr>
      )
    });
    return tableArray;
  }

  generateVariables() {
    let prefix, variablesArray = [];
    switch(this.state.button) {
      case 'less':
       prefix = '@';
       break;
      case 'sass':
       prefix = '$';
       break;
      case 'stylus':
       prefix = '';
       break;
    }
    for (let key in this.state.values) {
      let value = prefix + this.state.values[key] + ': ' + this.props.exportedVariables.colors[key];
      variablesArray.push(<p className="export-code__data-item" key={`variable${key}`}>{value}</p>);
    }
    return variablesArray;
  }

  buttonChange(evt, type) {
    evt.preventDefault();
    this.setState(Object.assign(this.state, {button: type}));
  }

  render() {
    return (
      <section className="section export-section">
        <table className="export-table">
          <tbody className="export-table-body">
            <tr className="export-table__row export-table__headings">
              <th className="export-table__heading">Color</th>
              <th className="export-table__heading">HEX value</th>
              <th className="export-table__heading">RGB value</th>
              <th className="export-table__heading">Variable name</th>
            </tr>
            {this.generateTable()}
          </tbody>
        </table>
        <div className="export-code">
          <h2 className="secondary-heading">Export your code</h2>

          <div className="export-code__buttons">
            <button
            className={this.state.button === 'less' ? "export-code__button export-code__button-active export-code__button-less" : "export-code__button export-code__button-less"}
            onClick={(evt) => this.buttonChange(evt, 'less')}>LESS</button>
            <button
            className={this.state.button === 'sass' ? "export-code__button export-code__button-active export-code__button-sass" : "export-code__button export-code__button-sass"}
            onClick={(evt) => this.buttonChange(evt, 'sass')}>SASS</button>
            <button
            className={this.state.button === 'stylus' ? "export-code__button export-code__button-active export-code__button-stylus" : "export-code__button export-code__button-stylus"}
            onClick={(evt) => this.buttonChange(evt, 'stylus')}>Stylus</button>
          </div>

          <div className="export-code__data">
            {this.generateVariables()}
          </div>
        </div>
      </section>
    )
  }
}

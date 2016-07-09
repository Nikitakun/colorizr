import React from 'react';
import colors from '../storage/colors-storage';
import ReactColorPicker from 'react-color-picker';

export default class ColorPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: '#432952'
    };
    this.onDrag = this.onDrag.bind(this);
  }

  onDrag(color) {
    if (this.props.type === 'Main') {
      colors.currentColor = color;
      this.props.action(color, this.props.chosenColors.colors);
    } else {
      colors.mixingColor = color;
      this.props.action(color);
    }
    this.setState({
      color: color
    });
  }


  render() {
    return (
      <div className="main-colorpick">
        <ReactColorPicker value={this.state.color} onDrag={this.onDrag} />
      </div>
    )
  }
}

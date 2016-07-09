import colors from '../storage/colors-storage';
import { defineMix, toRGB, toRGBString, MIX_DIVISION_STEPS } from '../storage/functionality-storage';

let mixColor = (mixingColor) => {
  return {
    type: 'MIX_COLORS',
    mix: defineMix(colors.currentColor, mixingColor)
  }
}

export default mixColor;

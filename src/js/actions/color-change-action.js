import colors from '../storage/colors-storage';
import { defineBrightness, defineGradient, defineMix, toRGB, toRGBString, GRADIENT_DIVISION_STEPS, MIX_DIVISION_STEPS } from '../storage/functionality-storage';



let colorChange = (currColor, chosenColors) => {
  return {
    type: 'COLOR_CHANGE',
    color: currColor,
    brightness: defineBrightness(currColor),
    gradient: defineGradient(currColor, chosenColors),
    mix: defineMix(currColor, colors.mixingColor, chosenColors)
  }
}

export default colorChange;

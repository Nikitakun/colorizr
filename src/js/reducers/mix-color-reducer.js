import colors from '../storage/colors-storage';
import { defineMix, toRGB, toRGBString, MIX_DIVISION_STEPS } from '../storage/functionality-storage';

let defaultMix = defineMix(colors.currentColor, colors.mixingColor, []);

let mixedColors = (state = defaultMix, action) => {
  switch(action.type) {
    case 'MIX_COLORS':
    case 'COLOR_CHANGE':
      return action.mix;
    case 'DELETE_COLOR':
      if (action.mixChosen || action.amount === 'all') {
        return action.amount === 'single' ? Object.assign({}, state, {chosen: action.mixChosen}) : Object.assign({}, state, {chosen: {}});
      } else {
        return state;
      }
    case 'ADD_COLOR':
      if (action.panelType.mixed && action.amount === 'single') {
        let chosenIndex = action.chosenAmount < 10 ? action.chosenAmount : action.chosenAmount - 1;
        return Object.assign({}, state, {chosen: Object.assign(state.chosen, {[action.panelIndex]: chosenIndex})});
      } else if (action.panelType.mixed && action.amount !== 'single') {
        return Object.assign({}, state, {chosen: Object.assign(state.chosen, {0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9})});
      } else if (action.panelType.mixed) {
        return Object.assign({}, state, {chosen: {}});
      }
    default:
      return state;
  }
}

export default mixedColors;

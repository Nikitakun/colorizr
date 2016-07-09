import colors from '../storage/colors-storage';
import { defineBrightness, defineGradient, toRGB, toRGBString, GRADIENT_DIVISION_STEPS } from '../storage/functionality-storage';

let defaultScheme = defineGradient(colors.currentColor, []);

let schemedColors = (state = defaultScheme, action) => {
  switch(action.type) {
    case 'COLOR_CHANGE':
      return action.gradient;
    case 'DELETE_COLOR':
      if (action.schemedChosen || action.amount === 'all') {
        return action.amount === 'single' ? Object.assign({}, state, {chosen: action.schemedChosen}) : Object.assign({}, state, {chosen: {}});
      } else {
        return state;
      }
    case 'ADD_COLOR':
      if (action.panelType.schemed && action.amount === 'single') {
        let chosenIndex = action.chosenAmount < 10 ? action.chosenAmount : action.chosenAmount - 1;
        return Object.assign({}, state, {chosen: Object.assign(state.chosen, {[action.panelIndex]: chosenIndex})});
      } else if (action.panelType.schemed && action.amount !== 'single') {
        return Object.assign({}, state, {chosen: Object.assign(state.chosen, {0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9})});
      } else if (action.panelType.schemed) {
        return Object.assign({}, state, {chosen: {}});
      }
    default:
      return state;
  }
}

export default schemedColors;

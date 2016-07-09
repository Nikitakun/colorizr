import colors from '../storage/colors-storage';

let pageColors = (state = {brightness: 'white', color: colors.currentColor}, action) => {
  switch(action.type) {
    case 'COLOR_CHANGE':
     return {
       brightness: action.brightness,
       color: action.color
     }
    default:
      return state;
  }
}

export default pageColors;

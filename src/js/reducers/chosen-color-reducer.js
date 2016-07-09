let chosenColors = (state = {colors: [], type: undefined}, action) => {
  let length = state.colors.length;

  switch (action.type) {
    case 'ADD_COLOR':
      if (length < 10 && action.amount === 'single') {
        let newState = Object.assign({}, state);
        newState.colors = newState.colors.concat(action.color);
        if (action.panelType.exploreType) newState.exploreType = action.panelType.exploreType;        
        return newState;
      } else if (action.amount === 'single') {
          let newState = Object.assign({}, state);
          newState.colors = newState.colors.concat(action.color);
          newState.colors = newState.colors.slice(1);
          return newState;
      } else if (action.amount === 'multiple') {
          let newState = Object.assign({}, state);
          newState.colors = action.color;
          if (action.panelType.presetType) newState.presetType = action.panelType.presetType;
          return newState;
      } else {
          let newState = Object.assign({}, state);
          newState.colors = action.color;
          return newState;
      }
    case 'DELETE_COLOR':
      let newState = Object.assign({}, state);
      newState.colors = action.chosenColors ? action.chosenColors : [];
      return newState;
    default:
      return state;
  }
}

export default chosenColors;

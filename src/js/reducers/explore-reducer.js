let exploredColors = (state = {}, action) => {
    switch (action.type) {
      case 'FETCH_COLORS':
        return action.presets;
      case 'DELETE_COLOR':
          if (action.exploreChosen) {
            let newState = Object.assign({}, state);
            Object.assign(newState[action.exploreType], {chosen: action.exploreChosen});
            return newState;
          } else {
            return state;
          }
      case 'ADD_COLOR':
        if (action.panelType.explore && action.amount === 'single') {
          let chosenIndex = action.chosenAmount < 10 ? action.chosenAmount : action.chosenAmount - 1;
          let newState = Object.assign({}, state);
          Object.assign(newState[action.panelType.exploreType].chosen, {chosen: Object.assign(state[action.panelType.exploreType].chosen, {[action.panelIndex]: chosenIndex})});
          return newState;
        }
      default:
        return state;
    }
}

export default exploredColors;

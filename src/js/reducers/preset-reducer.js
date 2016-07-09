let presetColors = (state = {}, action) => {
    switch (action.type) {
      case 'FETCH_COLORS':
        return action.schemes;
      case 'DELETE_COLOR':
        if (action.presetChosen === 'deleted') {
          let newState = Object.assign({}, state);
          newState[action.presetType].chosen = false;
          return newState;
        } else {
            return state;
        }
      case 'ADD_COLOR':
        if (action.panelType.preset) {
          let newState = Object.assign({}, state);

          for (let key in newState) {
            newState[key].chosen = false;
          }

          newState[action.panelType.presetType].chosen = true;
          return newState;
        }
      default:
        return state;
      }
}

export default presetColors;

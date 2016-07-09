let exportedVariables = (state = {values: {}, colors: []}, action) => {
  switch(action.type) {
    case 'VARIABLE_CHANGE':
      let newState = Object.assign({}, state);
      newState.values[action.index] = action.value;
      newState.colors[action.index] = action.color;
      return newState;
  default:
    return state;
  }
}

export default exportedVariables;

let changeVariable = (value, index, color) => {
  return {
    type: 'VARIABLE_CHANGE',
    index,
    value,
    color
  }
}

export default changeVariable;

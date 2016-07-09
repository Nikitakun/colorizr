let addColor = (amount, color, panelType, panelIndex, chosenAmount) => {
  return {
    type: 'ADD_COLOR',
    amount,
    color,
    panelType,
    panelIndex,
    chosenAmount
  }
}

export default addColor;

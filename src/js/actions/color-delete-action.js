let deleteColor = (amount, chosenIndex, chosenColors, colorsToCompare) => {
  let temp, schemedChosen, mixChosen, exploreChosen, presetChosen;

  if (amount === 'single') {
    temp = chosenColors.slice();
    temp.splice(chosenIndex, 1);

    schemedChosen = {};
    mixChosen = {};

    colorsToCompare.schemedArray.forEach((scColor, scIndex) => {
      temp.forEach((chColor, chIndex) => {
        if (scColor === chColor) schemedChosen[scIndex] = chIndex;
      });
    });

    colorsToCompare.mixArray.forEach((mxColor, mxIndex) => {
      temp.forEach((chColor, chIndex) => {
        if (mxColor === chColor) mixChosen[mxIndex] = chIndex;
      })
    });



    if (colorsToCompare.exploreArray) {
      exploreChosen = {};
      colorsToCompare.exploreArray.forEach((exColor, exIndex) => {
        temp.forEach((chColor, chIndex) => {
          if (exColor === chColor) exploreChosen[exIndex] = chIndex;
        })
      });
    }

    if (colorsToCompare.presetArray) {
      let equalityCounter = 0;
      colorsToCompare.presetArray.forEach((preColor, preIndex) => {
        temp.forEach((chColor, chIndex) => {
          if (preColor === chColor) {
            equalityCounter++;

            equalityCounter === 5 ? presetChosen = true : presetChosen = 'deleted';
          }
        })
      });
    }
  }

  return {
    type: 'DELETE_COLOR',
    amount,
    chosenColors: temp,
    schemedChosen,
    mixChosen,
    exploreChosen,
    exploreType: colorsToCompare.exploreType,
    presetChosen,
    presetType: colorsToCompare.presetType
  }
};

export default deleteColor;

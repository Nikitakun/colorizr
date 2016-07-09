let getData = (presets, schemes) => {
  return {
    type: 'FETCH_COLORS',
    presets,
    schemes
  }
};

let fetchData = (chosenColors) => {
  let data;
  return dispatch => {
    fetch('json/colors.json')
    .then((response) => response.json())
    .then((data) => {
      let presets = {}, schemes = {};

      for (let key in data.presets) {
        presets[key] = {colors: [], chosen: {}};
        presets[key].colors = data.presets[key].slice();
        if (chosenColors.length) {
          data.presets[key].forEach((presetColor, presetIndex) => {
            chosenColors.forEach((chosenColor, chosenIndex) => {
              if (presetColor === chosenColor) presets[key].chosen[presetIndex] = chosenIndex;
            })
          });
        }
      }

      for (let key in data.schemes) {
        schemes[key] = {colors: [], chosen: false};
        schemes[key].colors = data.schemes[key].slice();
      }
      dispatch(getData(presets, schemes));
    })
  }
};

export default fetchData;

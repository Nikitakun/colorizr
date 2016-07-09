import { combineReducers } from 'redux';
import mixedColors from './mix-color-reducer';
import schemedColors from './schemed-color-reducer';
import pageColors from './page-colors-reducer';
import chosenColors from './chosen-color-reducer';
import exploredColors from './explore-reducer';
import presetColors from './preset-reducer';
import exportedVariables from './export-variables-reducer';

let combinedReducers = combineReducers({
  mixedColors,
  schemedColors,
  pageColors,
  chosenColors,
  exploredColors,
  presetColors,
  exportedVariables
});

export default combinedReducers;

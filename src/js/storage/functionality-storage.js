const GRADIENT_DIVISION_STEPS = 9;
const MIX_DIVISION_STEPS = 8;

function toHex(rgb) {
  let a = rgb.split("(")[1].split(")")[0].split(",");
  let b = a.map(function(x) {
      x = parseInt(x).toString(16);
      return x.length === 1 ? "0"+ x : x;
  });
  return b = "#" + b.join("");
}

function toRGB(HEX) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(HEX);
  return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
}

function toRGBString(red, green, blue) {
  return `rgb(${red}, ${green}, ${blue})`;
}

function defineBrightness(color) {
  let rgbArray = toRGB(color),
  red = rgbArray[0],
  green = rgbArray[1],
  blue = rgbArray[2];

  if (red >= 170 && green >=170 && blue >=170) {
    return 'black';
  } else if (green >= 200) {
    return 'black';
  } else {
    return 'white';
  }
}

function defineGradient(color, chosenColors) {
  let rgbArray = toRGB(color),
  red = rgbArray[0],
  green = rgbArray[1],
  blue = rgbArray[2],
  stepForRed,
  stepForGreen,
  stepForBlue,
  brightness = defineBrightness(color),
  gradientArray = [],
  gradientObj = {array: [], chosen: {}};
  gradientArray.push(toRGBString(red, green, blue));

  if (brightness === 'black') {

    stepForRed = Math.round(red / GRADIENT_DIVISION_STEPS / 1.75);
    stepForGreen = Math.round(green / GRADIENT_DIVISION_STEPS / 1.75);
    stepForBlue = Math.round(blue / GRADIENT_DIVISION_STEPS / 1.75);

    for (let i = 0; i < GRADIENT_DIVISION_STEPS; i++) {
        if (red > 0) red -= stepForRed;
        if (green > 0) green -= stepForGreen;
        if (blue > 0) blue -= stepForBlue;
        gradientArray.push(toRGBString(red, green, blue));
      }

    }
   else {

    stepForRed = Math.round((255 - red) / GRADIENT_DIVISION_STEPS / 1.75);
    stepForGreen = Math.round((255 - green) / GRADIENT_DIVISION_STEPS / 1.75);
    stepForBlue = Math.round((255 - blue) / GRADIENT_DIVISION_STEPS / 1.75);

    for (let i = 0; i < GRADIENT_DIVISION_STEPS; i++) {
      if (red > 0) red += stepForRed;
      if (green > 0) green += stepForGreen;
      if (blue > 0) blue += stepForBlue;
       gradientArray.push(toRGBString(red, green, blue));

     }
  }
  if (chosenColors) {
    gradientArray.forEach((grColor, grIndex) => {
      chosenColors.forEach((chColor, chIndex) => {
        if (grColor === chColor) gradientObj.chosen[grIndex] = chIndex;
      })
    });
  }
  gradientObj.array = gradientArray;
  return gradientObj;
}

function defineMix(currColor, mixColor, chosenColors) {
  let stepForRed, stepForGreen, stepForBlue,
  mixArray = [],
  mixObj = {array: [], chosen: {}},
  rgbArray = toRGB(currColor),
  rgbMixArray = toRGB(mixColor),
  red = rgbArray[0],
  green = rgbArray[1],
  blue = rgbArray[2],
  redMix = rgbMixArray[0],
  greenMix = rgbMixArray[1],
  blueMix = rgbMixArray[2],
  finalColor = toRGBString(redMix, greenMix, blueMix);

  redMix = red - redMix;
  greenMix = green - greenMix;
  blueMix = blue - blueMix;
  stepForRed = Math.round(redMix / MIX_DIVISION_STEPS / 1.2);
  stepForGreen = Math.round(greenMix / MIX_DIVISION_STEPS / 1.2);
  stepForBlue = Math.round(blueMix / MIX_DIVISION_STEPS / 1.2);

  redMix = red;
  greenMix = green;
  blueMix = blue;

  mixArray.push(toRGBString(redMix, greenMix, blueMix));
  for (let i = 0; i < MIX_DIVISION_STEPS; i++) {
    if (redMix < 0) {
      redMix += stepForRed;
    } else if (redMix > 0) {
      redMix -= stepForRed;
    }
    if (greenMix < 0) {
      greenMix += stepForGreen;
    } else if (greenMix > 0) {
      greenMix -= stepForGreen;
    }
    if (blueMix < 0) {
      blueMix += stepForBlue;
    } else if (blueMix > 0) {
      blueMix -= stepForBlue;
    }
    mixArray.push(toRGBString(redMix, greenMix, blueMix));
  }
  mixArray.push(finalColor);

  if (chosenColors) {
    mixArray.forEach((mxColor, mxIndex) => {
      chosenColors.forEach((chColor, chIndex) => {
        if (mxColor === chColor) mixObj.chosen[mxIndex] = chIndex;
      })
    });
  }
  mixObj.array = mixArray;
  return mixObj;
}

export { defineBrightness, defineGradient, defineMix, toHex, toRGB, toRGBString, GRADIENT_DIVISION_STEPS, MIX_DIVISION_STEPS };

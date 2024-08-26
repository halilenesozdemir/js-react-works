function componentToHex(c) {
  //Hexadecimal is base 16. Break down the words, hexa, meaning 6; decimal meaning 10.
  // 10+ 6 = 16;
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default rgbToHex;

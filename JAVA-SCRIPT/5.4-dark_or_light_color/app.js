function colorSwitch(color) {
  switch (color) {
    case "yellow":
    case "pink":
    case "orange":
      return "light color";

    case "blue":
    case "purple":
    case "brown":
      return "dark color";

    default:
      return "Unknown color";
  }
}
console.log(colorSwitch("yellow"));
console.log(colorSwitch("pink"));
console.log(colorSwitch("orange"));
console.log(colorSwitch("blue"));
console.log(colorSwitch("purple"));
console.log(colorSwitch("brown"));
console.log(colorSwitch("green"));

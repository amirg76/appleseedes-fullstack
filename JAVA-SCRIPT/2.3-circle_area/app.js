function calcArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}
let area = calcArea(8);
console.log(area);
let areaRounded = Math.round(area * 100) / 100;
console.log(areaRounded);

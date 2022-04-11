const obj1 = {
  one: "1",
  two: "2",
  three: "3",
  forth: "4",
  five: "5",
};
function objSwap(obj) {
  const changeObj = Object.entries(obj).map(([key, value]) => [value, key]);

  return Object.fromEntries(changeObj);
}
console.log(objSwap(obj1));

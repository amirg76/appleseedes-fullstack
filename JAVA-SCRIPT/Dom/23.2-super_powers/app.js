const storm = {
  // add code here
  superPower: "flying",
  stromFunc: printSuperPower,
};
function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}

storm.stromFunc();

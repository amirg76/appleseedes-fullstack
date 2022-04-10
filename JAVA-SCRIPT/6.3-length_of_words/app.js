function arrayOfString(arr) {
  let arrSum = [];

  for (let index = 0; index < arr.length; index++) {
    arrSum[index] = [...arr[index]].length;
  }
  return arrSum;
}
console.log(arrayOfString(["boo", "doooo", "hoo", "ro"]));

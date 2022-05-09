const wordsArr = ["bbb", "aaa", "ccc"];
const wordsNotString = [null, 111, false];

const makeAllCaps = (arr) => {
  return new Promise((resolve, reject) => {
    arr.forEach((element) => {
      if (typeof element === "string")
        resolve(arr.map((words) => words.toUpperCase()));
      else reject();
    });
  });
};
makeAllCaps(wordsArr)
  .then((arr) => {
    console.log(arr);
  })
  .catch(() => {
    console.log("there is no string in array");
  });
makeAllCaps(wordsNotString)
  .then((arr) => {
    console.log(arr);
  })
  .catch(() => {
    console.log("there is no string in array");
  });

const sortWords = (arr) => {
  return new Promise((resolve, reject) => {
    arr.forEach((element) => {
      if (typeof element === "string") resolve(arr.sort());
      else reject();
    });
  });
};
sortWords(wordsArr)
  .then((arr) => {
    console.log(arr);
  })
  .catch(() => {
    console.log("there is no string in array");
  });
sortWords(wordsNotString)
  .then((arr) => {
    console.log(arr);
  })
  .catch(() => {
    console.log("there is no string in array");
  });

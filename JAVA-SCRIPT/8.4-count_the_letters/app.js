const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function countLetters(array) {
  let str = array.join("");
  console.log(str);

  var count = 0,
    temp = [];
  str = str.split("");
  console.log(str);
  for (var i = 0, len = str.length; i < len; i++) {
    if (!str.includes(" "))
      if (temp[i] == "a") {
        count++;
      }
  }
  return count;
}

console.log(countLetters(array));

const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

// 1.
function getCandy(candyStore, id) {
  //your code
  const asArray = Object.entries(candyStore);
  // console.log(asArray);
  // const filtered = asArray.filter((candy) => console.log(candy));
  const test = asArray.find((x) => console.log(x[0]));
  console.log(test);
  // const justStrings = Object.fromEntries(filtered);
  // return justStrings;
}
const candyWithId = getCandy(candyStore, "5hd7y");
console.log(candyWithId);

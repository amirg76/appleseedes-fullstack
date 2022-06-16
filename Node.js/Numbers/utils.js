export const numArray = [1, 2, 3, 4, 5, 6];

export const createNum = (newNumber, res) => {
  const checkNum = numArray.findIndex((num) => num === newNumber.num);
  console.log(checkNum);
  if (checkNum !== -1) {
    res.status(400).send("number already exists");
    return;
  }
  numArray.push(newNumber.num);
};

export const updateNum = (numToRemove, newNumber, res) => {
  const index = numArray.findIndex((num) => num === Number(numToRemove));
  if (index === -1) {
    res.status(400).send("number doesn’t exist");
    return;
  }
  numArray[index] = newNumber.num;
  res.send(numArray);
};
export const deleteNum = (numToRemove, res) => {
  const index = numArray.findIndex((num) => num === Number(numToRemove));

  if (index === -1) {
    res.status(400).send("number doesn’t exist");
    return;
  }
  numArray.splice(index, 1);
};

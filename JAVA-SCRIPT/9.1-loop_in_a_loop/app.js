const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let index of listOfNeighbours) {
  for (let country of index) {
    console.log(`Neighbour: ${country}`);
  }
}

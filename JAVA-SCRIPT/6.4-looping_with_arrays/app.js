const populations = [60, 55, 100, 1441];
function populationPercentages(poparr) {
  let percentages = [];
  for (let index = 0; index < poparr.length; index++) {
    percentages.push(percentageOfWorld1(poparr[index]));
  }
  return percentages;
}

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

console.log(populationPercentages(populations));

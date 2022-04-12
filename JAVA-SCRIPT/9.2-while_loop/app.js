const populations = [60, 55, 100, 1441];
function populationPercentages(poparr) {
  let percentages = [];
  let index = 0;

  while (index < poparr.length) {
    percentages.push(percentageOfWorld1(poparr[index]));
    index++;
  }
  // for (let index = 0; index < poparr.length; index++) {

  // }
  return percentages;
}

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

console.log(populationPercentages(populations));

//2. for loop better

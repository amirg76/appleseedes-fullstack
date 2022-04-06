function boom(n) {
  let thereIs7 = false;
  let emptyNumberArr = [];
  for (let i = 1; i < n + 1; i++) {
    emptyNumberArr[i] = i.toString();
  }

  for (let i = 1; i < emptyNumberArr.length; i++) {
    for (let j = 0; j < emptyNumberArr[i].length; j++) {
      if (emptyNumberArr[i][j].includes(7)) {
        console.log("BOOM-BOOM,");
        thereIs7 = true;
      }
    }
    if (i % 7 === 0 && !thereIs7) console.log("BOOM,");
    else if (i % 7 !== 0 && !thereIs7) console.log(`${i},`);
    thereIs7 = false;
  }
}

boom(parseInt(18));

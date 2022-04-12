function step(n) {
  for (let i = 1; i < n + 1; i++) {
    console.log("'" + "#".repeat(i) + " ".repeat(n + 1 - i - 1) + "'");
  }
}

step(4);
console.log("------------------");

function stepLoops(n) {
  let hastag = "";

  for (let i = 1; i < n + 1; i++) {
    hastag += "#";
    for (let j = n; j > i; j--) {
      hastag += " ";
    }
    console.log(`'${hastag}'`);
    hastag = hastag.split(/\s/).join("");
  }
}
stepLoops(5);

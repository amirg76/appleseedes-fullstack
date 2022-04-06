const numSiblings = window.prompt("How many siblings do you have?");

if (numSiblings == 1) console.log("1 sibling!");
else if (numSiblings > 1) console.log("More then 1 sibling!");
else console.log("No siblings");
// ************************
if (numSiblings === 1) console.log("1 sibling!");
else if (numSiblings > 1) console.log("More then 1 sibling!");
else console.log("No siblings");

// === equel also the type-prompt get string
// and not number
console.log(typeof numSiblings);

if (parseInt(numSiblings) === 1) console.log("1 sibling!");

//=== check if equel the value and type

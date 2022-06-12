// 1.
//require can be called from anywhere inside the program whereas
//import cannot be called conditionally, it always runs at the beginning of the file.
// 2.
// enable using the import syntax using node js: //"type": "module" in json file

// const { func4, func5, func6 } = require("./funcsCommon");
// console.log(func4());
// console.log(func5());
// console.log(func6());
// wont work becouse type:module

import { func1, func2, func3 } from "./funcsModule.js";
console.log(func1());
console.log(func2());
console.log(func3());

///
// 2 node js envirement var that not avilebe in moduels
// console.log(__filename);
// console.log(require.main);

// function getSum(arr1, arr2){
//   const sum = 0;
//   for (let i=0; i < arr1.length; i++){
//   sum += arr1[i];
//   }
//   for (let i=0; i < arr2.length; i++){
//   sum += arr2[i];
//   }
//   }
//   getSum([1,2,3][5,66,23]);

// 1.
// line 3,4

// 2.
//vscode debugger

// 3.
//length of arr1 is undefined becuse no , between array
// and sum is const cant change him need to be let

// .4
function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}
getSum([1, 2, 3], [(5, 66, 23)]);

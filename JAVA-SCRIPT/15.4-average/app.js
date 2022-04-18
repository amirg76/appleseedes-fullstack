// function calcAverage (arr){
//   var sum ;
//   for ( var i = 0 ; i < arr .length; i ++ ){
//   sum += arr [ i ];
//   }
//   return sum ;
//   }
//   calcAverage ([ 85 , 90 , 92 ]);

// 1.
// line 4 becouse line 1

// 2.
//vscode debugger

// 3.
//return sum:Nan becouse sum wasnt initislize to zero

// 4.
function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
calcAverage([85, 90, 92]);

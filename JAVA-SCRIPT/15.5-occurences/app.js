// function countOccurrences (str, char){
//   let counter = 0 ;
//   for ( let i = 0 ; i < str .length; i ++ ){
//   if ( str . charAt ( i ) === char ){
//   counter + 1 ;
//   }
//   }
//   return counter ;
//   }
//   countOccurrences ( "ini mini miny moe" , "n" )

// 1.
// line 5

// 2.
//chrome debugger

// 3.
//return counter:0, becouse counter wasnt assigent the result of accumiletor by

// 4.
function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter++;
    }
  }
  return counter;
}
countOccurrences("ini mini miny moe", "n");

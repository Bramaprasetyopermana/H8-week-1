// function data(num) {
// var max=num.sort(function(a,b){return b-a})[0]
// // console.log(max);
// let diagram
// for (var i = max; i >= 0; i--) {
//   diagram= `${i}|`;
//   // console.log(diagram);
//   for (var j = 0; j < num.length; j++) {
//     if (i == 0) {
//       diagram +=`-(${num[j]})-`
//     }
//     else if (i <= num[j]) {
//       diagram+= ' III '
//     }
//   }
//   console.log(diagram);
// }
// // return diagram;
//
// }
// data([2,4,6,7,3,1,5])
function star(num) {
  var board = []
  for (let row = 0; row < num; row++) {
    var text = []
    for (let col = 0; col < num; col++) {
      // text.push('*')
      if (row === Math.floor(num /2) && col ===Math.floor(num/2) ) {
        text+='X'
      }
      else if (row === num -1 || row === 0) {
        text+='I'
      }
      else if ( row === 1) {
        text+=' '
      }
      else if (row === num - 2) {
        text+=' '
      }
      // else if (row === 2 || row === 6) {
      //   text+='*'
      // }
      // else if (row === 3) {
      //   text+=' '
      // }
      // else if (row === 5) {
      //   text+=' '
      // }
    }
    board.push(text)
  }
  return board;
}
console.log(star(9));

// const proses=process.argv
// proses=ar
// console.log(proses)
function data(num) {
  var panjang = num * 3
  var result=[]
  for (var i = 0; i < panjang; i++) {
    var hasil = []
    for (var j = 0; j < panjang; j++) {
      if (j >= num && j < panjang - num) {
        hasil.push('X')
      }
      else if (i >= num && i < num + num) {
        hasil.push('X')
      }
      else {
        hasil.push(' ')
      }
    }
    result.push(hasil.join(''))
  }
  return result.join('\n')

//   for (var i = 0; i < num; i++) {
//     var hasil=''
//     for (var j = num; j > i; j--) {
//       hasil+=' '
//     }
//     for (var k = 0; k <= i; k++) {
//       hasil+='Y'
//     }
//     for (var l = 0; l< i; l++) {
//       hasil+='Y'
//     }
//     console.log(hasil);
//   }
}
console.log(data(1));

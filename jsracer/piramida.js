for (var i = 0; i < 5; i++) {
  var hasil=''
  for (var j = 5; j > i; j--) {
    hasil+=' '
  }
  for (var k = i; k >= 0; k--) {
    hasil+='X'
  }
  // for (var l= 0; l < i; l++) {
  //   hasil+='Y'
  // }
  console.log(hasil);
}

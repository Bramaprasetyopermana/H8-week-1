function nestedArray(jumlahRow, jumlahCol) {
  var board = []
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  for (let row = 0; row < jumlahRow; row++) {
    var random = []
    for (let col = 0; col < jumlahCol; col++) {
      var result = alphabet[Math.floor(Math.random() * ((alphabet.length)) + 1)]
      random.push(result)
    }
    board.push(random)
  }
  return board;
}
console.log(nestedArray(5, 3));
console.log(nestedArray(4, 2));

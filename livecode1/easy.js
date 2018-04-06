function dominoCard(card, deck) {
  var biggestDeck = Math.max(...deck)
  var count = []
  var counter = 0
  for (var i = 0; i < card.length; i++) {
    for (var j = 0; j < card[i].length; j++) {
      if (card[i][j] === deck[0] || card[i][j] === deck[1]) {
        count.push(card[i])
        counter++
      }
    }
  }
  var countAarray = []
  for (var k = 0; k < count.length; k++) {
    countAarray.push(count[k][0] + count[k][1])
  }
  var max = Math.max(...countAarray)
  var index = 0
  for (var l = 0; l < countAarray.length; l++) {
    if (countAarray[l] === max) {
      index = l
    }
  }
  if (counter !== 0) {
    return 'keluarkan kartu ' + count[index]

  } else {
    return 'Tutup 1 kartu'
  }

}
console.log(dominoCard([[3, 3],[6, 5],[3, 4],[2, 1]], [3, 5])); // [6,5]
console.log(dominoCard([[3, 3],[6, 5],[3, 4],[2, 1]], [1, 3])); // [3,4]
console.log(dominoCard([[2,4],[6,6],[3,6]],[1,5]));// Tutup 1 kartu

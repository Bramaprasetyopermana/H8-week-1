function insertionSort(array) {
  for (var i = 0; i < array.length; i++) {
    var awal = ''
    for (var j = 0; j < array.length; j++) {
      if (array[j] > array[i]) {
        awal = array[i]
        array[i] = array[j]
        array[j] = awal
      }
    }
  }
  return array
}
console.log(insertionSort(['makan', 'duduk', 'tidur', 'terbang'])); //['duduk','makan','terbang','tidur']
console.log(insertionSort(['anggi', 'angga', 'ani', 'adi'])); //[ 'adi', 'angga', 'anggi', 'ani' ]

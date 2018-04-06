function selectionSort(num) {
  for (var i = 0; i < num.length; i++) {
    for (var j = i + 1; j < num.length; j++) {
      if (num[i] > num[j]) {
        var awal = num[i]
        num[i] = num[j]
        num[j] = awal
      }
    }
  }
  return num;
}
console.log(selectionSort([33, 25, 52,3, 106, 73,1]));
console.log(selectionSort([13, 5, 22, 99, 11]));

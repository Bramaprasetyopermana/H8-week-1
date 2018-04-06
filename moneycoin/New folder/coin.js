//money coin
function convertToCoin(money) {
  var hasil = []
  var counter = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
  for (var i = 0; i < counter.length; i++) {
    while (money >= counter[i]) {
      money = money - counter[i]
      hasil.push(counter[i])
    }
  }
  return hasil
}
console.log(convertToCoin(543));
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));

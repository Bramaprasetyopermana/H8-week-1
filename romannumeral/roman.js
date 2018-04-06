// roman numerals
function toRoman(data) {
  var hasil = []
  var method = [{
      key: 'M',
      money: 1000
    },
    {
      key: 'CM',
      money: 900
    },
    {
      key: 'D',
      money: 500
    },
    {
      key: 'CD',
      money: 400
    },
    {
      key: 'C',
      money: 100
    },
    {
      key: 'XC',
      money: 90
    },
    {
      key: 'L',
      money: 50
    },
    {
      key: 'XL',
      money: 40
    },
    {
      key: 'X',
      money: 10
    },
    {
      key: 'IX',
      money: 9
    },
    {
      key: 'V',
      money: 5
    },
    {
      key: 'IV',
      money: 4
    },
    {
      key: 'I',
      money: 1
    }
  ]
  for (var i = 0; i < method.length; i++) {
    while (data >= method[i].money) {
      data = data - method[i].money
      hasil.push(method[i].key)
    }
  }
  return hasil.join('')
}
console.log(toRoman(476));
console.log(toRoman(2345));
console.log(toRoman(10));
console.log(toRoman(8));
console.log(toRoman(1453));

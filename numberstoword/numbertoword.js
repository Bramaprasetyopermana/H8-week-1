function convertToWords(data) {
  var puluhan = 10;
  var ratusan = 100;
  var ribuan = 1000
  var method = [{
      key: 1,
      spell: 'satu'
    },
    {
      key: 2,
      spell: 'dua'
    },
    {
      key: 3,
      spell: 'tiga'
    },
    {
      key: 4,
      spell: 'empat'
    },
    {
      key: 5,
      spell: 'lima'
    },
    {
      key: 6,
      spell: 'enam'
    },
    {
      key: 7,
      spell: 'tujuh'
    },
    {
      key: 8,
      spell: 'delapan'
    },
    {
      key: 9,
      spell: 'sembilan'
    }
  ]
  var pisah = data.toString()
  var hasilSisa = []
  var result = []
  var result2 = []
  for (var i = 0; i < method.length; i++) {
    var sisa = []
    var sisa2 = []
    if (method[i].key === data) {
      return method[i].spell;
    }
    if (pisah.length === 2) {
      var hasil = Math.floor(pisah / puluhan)
      sisa.push(pisah % puluhan)
    }

    if (hasil === method[i].key) {
      result.push(method[i].spell)
    }
  }
  for (var j = 0; j < sisa.length; j++) {
    for (var k = 0; k < method.length; k++) {
      if (method[k].key === sisa[j]) {
        hasilSisa.push(method[k].spell)
      }
    }
  }
  result.push('puluh ' + hasilSisa)
  return result.join(' ')
}
console.log(convertToWords(4));
console.log(convertToWords(27));
console.log(convertToWords(99));

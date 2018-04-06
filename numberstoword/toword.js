function data(num) {
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
    },
    {
      key: 10,
      spell: 'sepuluh'
    },
    {
      key: 11,
      spell: 'sebelas'
    },
    {
      key: 12,
      spell: 'dua belas'
    },
    {
      key: 13,
      spell: 'tiga belas'
    },
    {
      key: 14,
      spell: 'empat belas'
    },
    {
      key: 15,
      spell: 'lima belas'
    },
    {
      key: 16,
      spell: 'enam belas'
    },
    {
      key: 17,
      spell: 'tujuh belas'
    },
    {
      key: 18,
      spell: 'delapan belas'
    },
    {
      key: 19,
      spell: 'sembilan belas'
    }
  ]
  for (var i = 0; i < method.length; i++) {
    if (method[i].key === num) {
      return method[i].spell;
    } else if (num <= 0) {
      return '';
    } else if (num >= 20 && num <= 99) {
      var hasil = Math.floor(num / 10)
      var sisa = num % 10;
      return data(hasil) + ' puluh ' + data(sisa);
    } else if (num >= 100 && num <= 999) {
      var hasil = Math.floor(num / 100)
      var sisa = num % 100
      return data(hasil) + ' ratus ' + data(sisa);
    } else if (num >= 1000 && num <= 9999) {
      var hasil = Math.floor(num / 1000)
      var sisa = num % 1000
      return data(hasil) + ' ribu ' + data(sisa);
    } else if (num >= 10000 && num <= 99999) {
      var hasil = Math.floor(num / 10000)
      var sisa = num % 10000
      return data(hasil) + ' puluh ' + data(sisa);
    } else if (num >= 100000 && num <= 999999) {
      var hasil = Math.floor(num / 100000)
      var sisa = num % 100000
      return data(hasil) + ' ratus ' + data(sisa);
    } else if (num >= 1000000 && num <= 9999999) {
      var hasil = Math.floor(num / 1000000)
      var sisa = num % 1000000
      return data(hasil) + ' juta ' + data(sisa);
    } else if (num >= 10000000 && num <= 99999999) {
      var hasil = Math.floor(num / 10000000)
      var sisa = num % 10000000
      return data(hasil) + ' puluh ' + data(sisa);
    } else if (num >= 100000000 && num <= 999999999) {
      var hasil = Math.floor(num / 100000000)
      var sisa = num % 100000000
      return data(hasil) + ' ratus ' + data(sisa);
    }
  }
}
console.log(data(964876999));

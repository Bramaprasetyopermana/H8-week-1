//ALGORITMA
// langkah 1 : buat variabel openDate yang berisi tanggal buka tempat Fitness
//langkah 2 : lakukan looping dari openDate sampai dengan 31
//langkah 3: buat var hasil yang berisi array kosong dalam looping
//langkah 4 : buat kondisi jika i samadengan openDate
//4.1 : push pada var hasil ('Tono','Anton','Budi')
// langkah 5 : buat kondisi else if i modulus 5 sama dengan 0
//5.1 : push pada var hasil ('Tempat Fitness Tutup')
//langkah 6 : buat kondisi jika i-7 modulus 2 samadengan 0
//6.1 : push pada var hasil ('Tono')
//langkah 7 : buat kondisi jika i-7 modulus 4 samadengan 0
//7.1 : push pada var hasil ('Anton')
//langkah 8 : buat kondisi jika i-7 samadengan 0
//8.1: push pada var hasil ('Budi')
// langkah 9: tampilkan ' Tanggal '+i+' : '+hasil
//langkah 10
function fitnessMember(openDate, endDate, arr_members) {
  // for (var i = openDate; i <= endDate; i++) {
  //   var hasil = []
  //   if (i === openDate) {
  //     hasil.push('Tono', 'Anton', 'Budi')
  //   } else if (i % 5 === 0) {
  //     hasil.push('Tempat Fitness Tutup')
  //   } else {
  //     for (let j = 0; j < members.length; j++) {
  //       if ((i - 7) % members[j].interval === 0) {
  //         hasil.push(members[j].name)
  //       }
  //     }
  //     console.log(' Tanggal ' + i + ' : ' + hasil)
  //   }
  //
  // }

  for (var i = openDate; i < endDate ; i++) {
    if (i === openDate) {
      hasil.push('Tono','Anton','Budi')
    }
    else if (i % 5 === 0) {
      hasil.push('Tempat Fitness Tutup')
    }
    else {
      for (var j = 0; j < members.length; j++) {
        if (i-7 % members[i].interval === 0) {
          hasil.push()
        }
      }
    }
  }
}

var members = [{
  name: 'Tono',
  interval: 2
}, {
  name: 'Anton',
  interval: 4
}, {
  name: 'Budi',
  interval: 5
}]
fitnessMember(7, 31, members)

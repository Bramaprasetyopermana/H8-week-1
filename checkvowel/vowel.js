function checkVowel(names) {
  var hasil = names.toLowerCase()
  var pisah = hasil.split('')
  var vowel = ['a', 'i', 'u', 'e', 'o']
  var count = 0
  if (names.length === 0) {
    return false
  }
  for (var i = 0; i < pisah.length; i++) {
    for (var j = 0; j < vowel.length; j++) {
      if (pisah[i] === vowel[j]) {
        count++
      }
    }
  }
  if (count === names.length) {
    return true;
  } else {
    return false;
  }
}
console.log(checkVowel('aaaaiiiuuu')); // True
console.log(checkVowel('aiuu')); // True
console.log(checkVowel('iiuuueeeoo')); // True
console.log(checkVowel('mjBgPlzks')); // False
console.log(checkVowel('aiueo')); // True
console.log(checkVowel('oeuia')); // True
console.log(checkVowel('')); // False

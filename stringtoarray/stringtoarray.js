function stringToArray(data) {
  var result = []
  var toSplit = data.split('')
  var temp = []
  for (let i = 0; i < toSplit.length; i++) {
    temp.push(toSplit[i])
    if (toSplit[i + 1] === ',') {
      i += 1
      result.push(temp)
      temp = []
    }
  }
  result.push(temp);
  return result;
}
console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('aqst,ukei,ffoo,yhtf'));

var result = []

function nestedObject(name, phase, gender) {
  var obj = {
    name: name,
    phase: phase,
    gender: gender
  }
  result.push(obj)
}

function getData(name) {
  var finalResult = ''
  for (let i = 0; i < result.length; i++) {
    if (result[i].name === name) {
      finalResult = result[i]
    }
  }
  return finalResult;
}
nestedObject('Akbar', 1, 'male'); //[{name:'Akbar',phase:1,gender:'male'}]
nestedObject('icha', 2, 'female'); //[{name:'icha',phase:2,gender:'female'}]
// console.log(result);
console.log(getData('icha'));

function data(num) {
  let board = []
  for (let row = 0; row < num; row++) {
    let text = ''
    for (let col = 0; col < num; col++) {
      if (row === Math.floor(num / 2) && col === Math.floor(num / 2)) {
        text += '*'
      } else if (row === num - 1 || row === 0) {
        text += 'I'
      } else if (row === num -1 && row === 1) {
        text+='I'
      }
      else{
        text+=' '
      }
    }
    board.push(text)
  }
  return board;
}
console.log(data(9));

"use strict"
var players = generate_player(2);
var track_length = 20;
let theWinner;

function dice() {
  let random = Math.floor(Math.random() * 6);

  return random;
}
//======== 3
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function print_board() {
  reset_board()
  for (let key in players) {
    console.log(print_line(key, players[key]));
  }
  sleep(700)
}

function play() {
  let status = false
  while (status === false) {
    for (let key in players) {
      players[key] = advanced_player(players[key]);
      print_board();
      status = finished(players[key]);
      if (status) {
        theWinner = key
        return;
      }
    }
  }
}

function advanced_player(player) {
  let lastPosition = player + dice()

  if (lastPosition > track_length - 1) {
    lastPosition = track_length - 1;
  }

  return lastPosition;
}

function finished(position) {
  if (position === track_length - 1) {
    return true;
  } else {
    return false;
  }
}

//======== 2
function print_line(player, position) {
  let line = []
  for (let i = 0; i < track_length; i++) {
    if (i === position) {
      line.push(player)
    } else {
      line.push(' ')
    }
  }
  return line.join('|') + '|'
}
// ======= 1
function generate_player(player) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var obj = {}
  for (var i = 0; i < player; i++) {
    obj[alphabet[i]] = 0
  }
  return obj;
}

function winner(player) {
  return `player ${player} is the winner`
}

function reset_board() {
  console.log("\x1B[2J")
}

print_board()
play()
console.log(winner(theWinner))

// var proses=process.argv
// console.log(proses);

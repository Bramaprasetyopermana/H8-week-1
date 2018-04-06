// "use strict"

function dice(){
return Math.floor(Math.random() * 6)+1
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function print_board() {

}

function print_line(player, pos) {

}

function advanced_player(player) {

}

function finished() {

}
function winner() {

}
function reset_board() {
  console.log("\x1B[2J")
}

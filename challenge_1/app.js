//place piece function drops X or O.
var piece = 0;
var x_wins = 0;
var o_wins = 0;
var games = 0;
var realBoard = [[],[],[]];
//generate a board
var boardMaker = () => {
  games++;
  var lineBreak = document.createElement('div');
  lineBreak.innerHTML = ("GAME "+ games);
  document.getElementById('board').appendChild(lineBreak);
  var r0 = document.createElement('div');
  var r1 = document.createElement('div');
  var r2 = document.createElement('div');
  r0.id ="r0";
  r1.id ="r1";
  r2.id ="r2";
  for (var i = 0; i < 3; i++) {
    var cell = document.createElement('span');
    cell.id ="r0-" + i;
    cell.onclick = function() {
      placePiece(this);
    };
    cell.innerHTML = " _ ";
    r0.appendChild(cell);
    //now make r1
    var cell1 = document.createElement('span');
    cell1.id ="r1-" + i;
    cell1.innerHTML = " _ ";
    cell1.onclick = function() {
      placePiece(this);
    };
    r1.appendChild(cell1);
    //r2
    var cell2 = document.createElement('span');
    cell2.id = "r2-" + i;
    cell2.innerHTML = " _ ";
    cell2.onclick = function() {
      placePiece(this);
    };
    r2.appendChild(cell2);
  }
  document.getElementById('board').appendChild(r0);
  document.getElementById('board').appendChild(r1);
  document.getElementById('board').appendChild(r2);
};
boardMaker();
var placePiece = (cell) => {
  if (piece % 2 === 0 && cell.innerHTML !== "X" && cell.innerHTML !== "O") {
    cell.innerHTML = 'X';
    piece++;
  } else if (cell.innerHTML !== "X" && cell.innerHTML !== "O") {
    cell.innerHTML = 'O';
    piece++;
  }
  checkWinR0();
  checkWinR1();
  checkWinR2();
  checkDiag1();
  checkDiag2();
};
//console.log(piece);

// console.log("connected");
//check Win func
var checkWinR0 = () => {
  var count_x = 0;
  var count_o = 0;
  // might just be hard coding.
  // intially wanted to tie this to a nested array.
  
  // check row 0 win?
  for (var i = 0; i < 3; i++) {
    //console.log(document.getElementById('r0-'+i));
    if (document.getElementById('r0-' + i).innerHTML === 'X') {
      count_x++;
      if(count_x === 3) {
        x_wins++;
        document.getElementById('xwon').innerHTML = x_wins;
        alert("PLAYER X WON");
        count_x = 0;
      }
    }
    if(document.getElementById('r0-' + i).innerHTML === 'O') {
      count_o++;
      if(count_o === 3) {
        o_wins++;
        document.getElementById('owon').innerHTML = o_wins;
        alert("PLAYER O WON");
        count_o = 0;
      }
    }
  }
  // check row 1 win?
  // check row 2 win?
};
var checkWinR1 = () => {
  var count_x = 0;
  var count_o = 0;
  for (var i = 0; i < 3; i++) {
    //console.log(document.getElementById('r0-'+i));
    if (document.getElementById('r1-' + i).innerHTML === 'X') {
      count_x++;
      if(count_x === 3) {
        x_wins++;
        document.getElementById('xwon').innerHTML = x_wins;
        alert("PLAYER X WON");
        count_x = 0;
      }
    }
    if(document.getElementById('r1-' + i).innerHTML === 'O') {
      count_o++;
      if(count_o === 3) {
        o_wins++;
        document.getElementById('owon').innerHTML = o_wins;
        alert("PLAYER O WON");
        count_o = 0;
      }
    }
  }
}
var checkWinR2 = () => {
  var count_x = 0;
  var count_o = 0;
  for (var i = 0; i < 3; i++) {
    //console.log(document.getElementById('r0-'+i));
    if (document.getElementById('r2-' + i).innerHTML === 'X') {
      count_x++;
      if(count_x === 3) {
        x_wins++;
        document.getElementById('xwon').innerHTML = x_wins;
        alert("PLAYER X WON");
        count_x = 0;
      }
    }
    if(document.getElementById('r2-' + i).innerHTML === 'O') {
      count_o++;
      if(count_o === 3) {
        o_wins++;
        document.getElementById('owon').innerHTML = o_wins;
        alert("PLAYER O WON");
        count_o = 0;
      }
    }
  }
}
var checkDiag1 = () => {
  var count_x = 0;
  var count_o = 0;
  for (var i = 0; i < 3; i++) {
    if (document.getElementById('r' + i + '-' + i).innerHTML === "X") {
      count_x++;
      if (count_x === 3) {
        x_wins++;
        document.getElementById('xwon').innerHTML = x_wins;
        alert("PLAYER X WON");
      }
    }
    if (document.getElementById('r' + i + '-' + i).innerHTML === "O" ) {
      count_o++;
      if (count_o === 3) {
        o_wins++;
        document.getElementById('owon').innerHTML = o_wins;
        alert("PLAYER O WON");
      }
    }
  }
};
var checkDiag2 = () => {
  var count_x = 0;
  var count_o = 0;
  for (var i = 0; i < 3; i++) {
    if (document.getElementById('r' + i + '-' + (2-i) ).innerHTML === "X") {
      count_x++;
      if (count_x === 3) {
        x_wins++;
        document.getElementById('xwon').innerHTML = x_wins;
        alert("PLAYER X WON");
      }
    }
    if (document.getElementById('r' + i + '-' + (2-i)).innerHTML === "O") {
      count_o++;
      if (count_o === 3) {
        o_wins++;
        document.getElementById('owon').innerHTML = o_wins;
        alert("PLAYER O WON");
      }
    }
  }
};
var resetBoard = () => {
  //remove all rows.
  var r0 = document.getElementById('r0');
  var r1 = document.getElementById('r1');
  var r2 = document.getElementById('r2');
  r0.parentNode.removeChild(r0);
  r1.parentNode.removeChild(r1);
  r2.parentNode.removeChild(r2);
  boardMaker();
};
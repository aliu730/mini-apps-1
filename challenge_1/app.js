//place piece function drops X or O.
var piece = 0;
var x_wins = 0;
var o_wins = 0;
var games = 0;
var realBoard = [[],[],[]];
//generate a board
var boardMaker = () => {
  piece = 0;
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
    cell.style ="border: 1px solid black; width: fit-content;";
    r0.appendChild(cell);
    //now make r1
    var cell1 = document.createElement('span');
    cell1.id ="r1-" + i;
    cell1.innerHTML = " _ ";
    cell1.onclick = function() {
      placePiece(this);
    };
    cell1.style = "border: 1px solid black; width: fit-content;";
    r1.appendChild(cell1);
    //r2
    var cell2 = document.createElement('span');
    cell2.id = "r2-" + i;
    cell2.innerHTML = " _ ";
    cell2.onclick = function() {
      placePiece(this);
    };
    cell2.style = "border: 1px solid black; width: fit-content;";
    r2.appendChild(cell2);
  }
;
  document.getElementById('board').appendChild(r0);
  document.getElementById('board').appendChild(r1);
  document.getElementById('board').appendChild(r2);
};
boardMaker();
var placePiece = (cell) => {
  var row = (cell.id[1]);
  var column = (cell.id[3]);
  if (piece % 2 === 0 && cell.innerHTML !== "X" && cell.innerHTML !== "O") {
    cell.innerHTML = 'X';
    realBoard[row][column] = 'X';
    piece++;
  } else if (cell.innerHTML !== "X" && cell.innerHTML !== "O") {
    cell.innerHTML = 'O';
    realBoard[row][column] = 'O';
    piece++;
  }
  checkWinR0();
  checkWinR1();
  checkWinR2();
  checkDiag1();
  checkDiag2();
  checkTie();
  checkColumns();
};
var checkColumns = () => {
  var col0x = 0;
  var col0o = 0;
  var col1x = 0;
  var col1o = 0;
  var col2x = 0;
  var col2o = 0;
  for (var i = 0; i < 3; i++) {
    if (realBoard[i][0] === "X") {
      col0x++;
      if (col0x === 3) {
        alert("PLAYER X WON");
        x_wins++;
        document.getElementById('xwon').innerHTML = x_wins;
      }
    }
    if (realBoard[i][0] === "O") {
      col0o++;
      if (col0o === 3) {
        alert("PLAYER O WON");
        o_wins++;
        document.getElementById('owon').innerHTML = o_wins;
        resetBoard();
      }
    }
    if (realBoard[i][1] === "X") {
      col1x++;
      if (col1x === 3) {
        alert("PLAYER X WON");
        x_wins++;
        document.getElementById('xwon').innerHTML = x_wins;
        resetBoard();
      }
    }
    if (realBoard[i][1] === "O") {
      col1o++;
      if (col1o === 3) {
        alert("PLAYER O WON");
        o_wins++;
        document.getElementById('owon').innerHTML = o_wins;
        resetBoard();
      }
    }
    if (realBoard[i][2] === "X") {
      col2x++;
      if (col2x === 3) {
        alert("PLAYER X WON");
        x_wins++;
        document.getElementById('xwon').innerHTML = x_wins;
        resetBoard();
      }
    }
    if (realBoard[i][2] === "O") {
      col2o++;
      if(col2o === 3) {
        alert("PLAYER O WON");
        o_wins++;
        document.getElementById('owon').innerHTML = o_wins;
        resetBoard();
      }
    }
  }
}
var checkWinR0 = () => {
  var count_x = 0;
  var count_o = 0;
  for (var i = 0; i < 3; i++) {
    if (realBoard[0][i] === 'X') {
      count_x++;
      if(count_x === 3) {
        x_wins++;
        document.getElementById('xwon').innerHTML = x_wins;
        alert("PLAYER X WON");
        count_x = 0;
        resetBoard();
      }
    }
    if(realBoard[0][i] === 'O') {
      count_o++;
      if(count_o === 3) {
        o_wins++;
        document.getElementById('owon').innerHTML = o_wins;
        alert("PLAYER O WON");
        count_o = 0;
        resetBoard();
      }
    }
  }
};
var checkWinR1 = () => {
  var count_x = 0;
  var count_o = 0;
  for (var i = 0; i < 3; i++) {
    if (realBoard[1][i] === 'X') {
      count_x++;
      if(count_x === 3) {
        x_wins++;
        document.getElementById('xwon').innerHTML = x_wins;
        alert("PLAYER X WON");
        count_x = 0;
        resetBoard();
      }
    }
    if(realBoard[1][i] === 'O') {
      count_o++;
      if(count_o === 3) {
        o_wins++;
        document.getElementById('owon').innerHTML = o_wins;
        alert("PLAYER O WON");
        count_o = 0;
        resetBoard();
      }
    }
  }
}
var checkWinR2 = () => {
  var count_x = 0;
  var count_o = 0;
  for (var i = 0; i < 3; i++) {
    if (realBoard[2][i] === 'X') {
      count_x++;
      if(count_x === 3) {
        x_wins++;
        document.getElementById('xwon').innerHTML = x_wins;
        alert("PLAYER X WON");
        count_x = 0;
        resetBoard();
      }
    }
    if(realBoard[2][i] === 'O') {
      count_o++;
      if(count_o === 3) {
        o_wins++;
        document.getElementById('owon').innerHTML = o_wins;
        alert("PLAYER O WON");
        resetBoard();
        count_o = 0;
      }
    }
  }
}
var checkDiag1 = () => {
  var count_x = 0;
  var count_o = 0;
  for (var i = 0; i < 3; i++) {
    if (realBoard[i][i] === "X") {
      count_x++;
      if (count_x === 3) {
        x_wins++;
        document.getElementById('xwon').innerHTML = x_wins;
        alert("PLAYER X WON");
        resetBoard();
      }
    }
    if (realBoard[i][i] === "O" ) {
      count_o++;
      if (count_o === 3) {
        o_wins++;
        document.getElementById('owon').innerHTML = o_wins;
        alert("PLAYER O WON");
        resetBoard();
      }
    }
  }
};
var checkDiag2 = () => {
  var count_x = 0;
  var count_o = 0;
  for (var i = 0; i < 3; i++) {
    if (realBoard[i][2-i] === "X") {
      count_x++;
      if (count_x === 3) {
        x_wins++;
        document.getElementById('xwon').innerHTML = x_wins;
        alert("PLAYER X WON");
        resetBoard();
      }
    }
    if (realBoard[i][2-i] === "O") {
      count_o++;
      if (count_o === 3) {
        o_wins++;
        document.getElementById('owon').innerHTML = o_wins;
        alert("PLAYER O WON");
        resetBoard();
      }
    }
  }
};
var checkTie = () => {
  var counter = 0;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (realBoard[i][j] !== undefined) {
        counter++;
      }
    }
  }
  if (counter === 9) {
    alert("TIE");
    resetBoard();
  }
};
var resetBoard = () => {
  var r0 = document.getElementById('r0');
  var r1 = document.getElementById('r1');
  var r2 = document.getElementById('r2');
  r0.parentNode.removeChild(r0);
  r1.parentNode.removeChild(r1);
  r2.parentNode.removeChild(r2);
  realBoard = [[],[],[]];
  boardMaker();
};
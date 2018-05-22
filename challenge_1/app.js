//place piece function drops X or O.
let piece = 0;
let x_wins = 0;
let o_wins = 0;
let games = 0;
let realBoard = [[],[],[]];
//generate a board
let boardMaker = () => {
  piece = 0;
  games++;
  let lineBreak = document.createElement('div');
  lineBreak.innerHTML = ("GAME "+ games);
  document.getElementById('board').appendChild(lineBreak);
  let r0 = document.createElement('div');
  let r1 = document.createElement('div');
  let r2 = document.createElement('div');
  r0.id ="r0";
  r1.id ="r1"; 
  r2.id ="r2";
  
  for (let i = 0; i < 3; i++) {
    let cell = document.createElement('span');
    cell.id ="r0-" + i;
    cell.onclick = function() {
      placePiece(this);
    };
    cell.innerHTML = " _ ";
    cell.style ="border: 1px solid black; width: fit-content;";
    r0.appendChild(cell);
    //now make r1
    let cell1 = document.createElement('span');
    cell1.id ="r1-" + i;
    cell1.innerHTML = " _ ";
    cell1.onclick = function() {
      placePiece(this);
    };
    cell1.style = "border: 1px solid black; width: fit-content;";
    r1.appendChild(cell1);
    //r2
    let cell2 = document.createElement('span');
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
let placePiece = (cell) => {
  let row = (cell.id[1]);
  let column = (cell.id[3]);
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
  //console.log(realBoard);
};


// console.log("connected");
//check Win func
let checkWinR0 = () => {
  let count_x = 0;
  let count_o = 0;
  // might just be hard coding.
  // intially wanted to tie this to a nested array.
  
  // check row 0 win?
  for (let i = 0; i < 3; i++) {
    //console.log(document.getElementById('r0-'+i));
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
  // check row 1 win?
  // check row 2 win?
};
let checkWinR1 = () => {
  let count_x = 0;
  let count_o = 0;
  for (let i = 0; i < 3; i++) {
    //console.log(document.getElementById('r0-'+i));
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
let checkWinR2 = () => {
  let count_x = 0;
  let count_o = 0;
  for (let i = 0; i < 3; i++) {
    //console.log(document.getElementById('r0-'+i));
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
let checkDiag1 = () => {
  let count_x = 0;
  let count_o = 0;
  for (let i = 0; i < 3; i++) {
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
let checkDiag2 = () => {
  let count_x = 0;
  let count_o = 0;
  for (let i = 0; i < 3; i++) {
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
let checkTie = () => {
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
//console.log(document.getElementsByClassName('xtitle').innerHTML)
let resetBoard = () => {
  //remove all rows.
  let r0 = document.getElementById('r0');
  let r1 = document.getElementById('r1');
  let r2 = document.getElementById('r2');
  r0.parentNode.removeChild(r0);
  r1.parentNode.removeChild(r1);
  r2.parentNode.removeChild(r2);
  realBoard = [[],[],[]];
  boardMaker();
};
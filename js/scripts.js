// Backend Logic
function Gem(type){
  this.type = type;
  this.pointVal = 50;
  this.col;
  this.row;
}
var matches;
var gem1 = new Gem ("red");
var gem2 = new Gem ("blue");

function Board() {
  // this.board= []
  // for (var i = 0; i < l; i++) {
  //   this.board.push([]);
  // }
  // return this.board;
  this.board = [[gem1, gem1, gem1, gem2], [gem2, gem1, gem2, gem1], [gem1, gem2, gem1, gem2], [gem2, gem2, gem2, gem1]];
}

Board.prototype.genGem = function (max) {
  var gem;
  for (var i = 0; i < this.board.length; i++) {
    for (var j = this.board[i].length; j < this.board.length; j++) {
      var number = Math.floor(Math.random() * (max + 1));
      if (number === 0) {
        gem = new Gem("blue");
      }else if (number === 1) {
        gem = new Gem("red");
      }
      this.board[i].push(gem);
    }
  }
};
Board.prototype.swapGems = function (gemInput1, gemInput2) {
  var gem1col = gemInput1.col;
  var gem1row = gemInput1.row;
  var gem2col = gemInput2.col;
  var gem2row = gemInput2.row;
  gemInput1.col = gem2col;
  gemInput1.row = gem2row;
  gemInput2.col = gem1col;
  gemInput2.row = gem1row;
  this.board[gem1col][gem1row] = gemInput2;
  this.board[gem2col][gem2row] = gemInput1;
};

Board.prototype.conditionA = function (i, j) {
  if (this.board[i][j] === this.board[i - 1][j] && this.board[i][j] === this.board[i - 2][j]) {
    return true;
  }else {
    return false;
  }
};

Board.prototype.conditionB = function (i, j) {
  if (this.board[i][j] === this.board[i - 1][j] && this.board[i][j] === this.board[i + 1][j]) {
    return true;
  }else {
    return false;
  }
};

Board.prototype.conditionC = function (i, j) {
  if (this.board[i][j] === this.board[i + 1][j] && this.board[i][j] === this.board[i + 2][j]) {
    return true;
  }else {
    return false;
  }
};

Board.prototype.match = function () {
  matches = new Set();
  var start = this.board.length-1;
  var match = false;
  for (var i = start; i >= 0; i--) {
    for (var j = start; j >= 0; j--) {

      if (i > 1 && i<start-1) {

        if (this.conditionA(i, j) || this.conditionB(i, j) || this.conditionC(i, j)){
          matches.add(i + "," + j);
          match = true;
        }
      }
      if (i === 1) {

        if (this.conditionB(i, j) || this.conditionC(i, j)){
          matches.add(i + "," + j);
          match = true;
        }
      }
      if (i === 0) {

        if (this.conditionC(i, j)){
          matches.add(i + "," + j);
          match = true;
        }
      }
      if (i === start - 1) {

        if (this.conditionA(i, j) || this.conditionB(i, j)){
          matches.add(i + "," + j);
          match = true;
        }
      }
      if (i === start) {
        if (this.conditionA(i, j)){
          matches.add(i + "," + j);
          match = true;
        }
      }
        // evaluating rows

      // evaluating columns
      if (this.board[i][j] === this.board[i][j - 1] && this.board[i][j] === this.board[i][j - 2] || this.board[i][j] === this.board[i][j - 1] && this.board[i][j] === this.board[i][j + 1] || this.board[i][j] === this.board[i][j + 1] && this.board[i][j] === this.board[i][j + 2]) {
        matches.add(i + "," + j);
        match = true;
      }
    }
  }
  return match;
};

Board.prototype.isValid = function () {
  var tempBoard = new Board();

  for (var i = 0; i < this.board.length; i++) {
    for (var j = 0; j < this.board.length; j++) {
      tempBoard.board[i][j] = this.board[i][j];

    }
  }
  // tempBoard.swapGems(gem1,gem2);
  return tempBoard.match();
};

Board.prototype.clearGems = function () {
  var thisBoard = this.board;
  matches.forEach(function(item) {
    var coordinates=item.split(',');
    thisBoard[parseInt(coordinates[0])].splice(parseInt(coordinates[1]),1);
  });
};



// User Interface Logic

function drawBoard(board) {
  // debugger;
  for (var i = 0; i < board.board.length; i++) {
    for (var j = 0; j < board.board.length; j++) {
      var cellID = '#' + i + '-' + j;
      // console.log(board.board[i][j].type);
      if (board.board[i][j].type === 'blue') {
        $(cellID).empty().append('<img src="img/blue.png">');
       } else if (board.board[i][j].type === 'red') {
        $(cellID).empty().append('<img src="img/red.png">')
      }
    }
  }
}

function selectGem(board) {
  var gemSwap1 = null;
  var gemSwap2;
  var thisBoard = board;
  $('.cell').click(function() {
    // debugger;
    var userClick = $(this).attr('id');
    var gemCoords = userClick.split('-');
    var xCoord = parseInt(gemCoords[0]);
    var yCoord = parseInt(gemCoords[1]);

    if (gemSwap1 === null) {
      $(this).addClass("highlight");
      board.board[xCoord][yCoord].col = xCoord;
      board.board[xCoord][yCoord].row = yCoord;
      gemSwap1 = board.board[xCoord][yCoord];
      $("[id="+ xCoord + "-" + (yCoord + 1) + "]").addClass('highlight');
      $("[id="+ xCoord + "-" + (yCoord - 1) + "]").addClass('highlight');
      $("[id="+ (xCoord + 1) + "-" + yCoord + "]").addClass('highlight');
      $("[id="+ (xCoord - 1) + "-" + yCoord + "]").addClass('highlight');
    } else {
      board.board[xCoord][yCoord].col = xCoord;
      board.board[xCoord][yCoord].row = yCoord;
      gemSwap2 = board.board[xCoord][yCoord];
      console.log(gemSwap1);
      console.log(gemSwap2);
      board.swapGems(gemSwap1, gemSwap2);
      drawBoard(board);
      gemSwap1 = null;
      $(".cell").removeClass("highlight");
    }
  });
}

$(document).ready(function(){

  var newBoard = new Board();
  drawBoard(newBoard);
  newBoard.isValid();
  newBoard.clearGems();
  newBoard.genGem(1);
  drawBoard(newBoard);
  //var newBoard = new Board();


  // var gemSwap1 = new Gem ("red");
  // var gemSwap2 = new Gem ("blue");
  // gemSwap1.col = 0;
  // gemSwap2.col = 0;
  // gemSwap1.row = 0;
  // gemSwap2.row = 1;
  //drawBoard(newBoard);
  //selectGem(newBoard);

  // board.swapGems(gemSwap1, gemSwap2);
});

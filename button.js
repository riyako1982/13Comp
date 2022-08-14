/**********************************/
// btnClicked
/**********************************/
var counter = 0;
const start_game = false;

/**********************************/
// btnClicked(buttonnumber)
// ??
// Called by html  tictactoe button 
/**********************************/
function btnClicked(buttonnumber) {
  console.log("btn" + buttonnumber);
  const btn = document.getElementById("btn" + buttonnumber);
  btn.disabled = true;
  counter++
  if (counter % 2 == 0) {
    console.log(counter);
    console.log("btn" + buttonnumber);
    document.getElementById("btn" + buttonnumber).innerHTML = "x"
    // check to see if X won or its a draw
    checkResult('x')

  } else {
    document.getElementById("btn" + buttonnumber).innerHTML = "o"
    // check to see if O won or its a draw
    checkResult('o')
  }
}

/**********************************/
// disabled(_action)
// FUNCTION FOR BUTTON DISABLING/enabling
// this function disables all the buttons that helps run the game
// Called by ???
/**********************************/
function disabled(_action) {
  document.getElementById("btn0").disabled = _action;
  document.getElementById("btn1").disabled = _action;
  document.getElementById("btn2").disabled = _action;
  document.getElementById("btn3").disabled = _action;
  document.getElementById("btn4").disabled = _action;
  document.getElementById("btn5").disabled = _action;
  document.getElementById("btn6").disabled = _action;
  document.getElementById("btn7").disabled = _action;
  document.getElementById("btn8").disabled = _action;
}

/**********************************/
// checkResult(_symbol)
// ???
// Called by ??
/**********************************/
function checkResult(_symbol) {
  console.log("checkResult symbol = " + _symbol)

  // Setting DOM to all boxes or input field
  var btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8;
  console.log(document.getElementById("btn0").innerHTML);
  btn0 = document.getElementById("btn0").innerHTML;
  btn1 = document.getElementById("btn1").innerHTML;
  btn2 = document.getElementById("btn2").innerHTML;
  btn3 = document.getElementById("btn3").innerHTML;
  btn4 = document.getElementById("btn4").innerHTML;
  btn5 = document.getElementById("btn5").innerHTML;
  btn6 = document.getElementById("btn6").innerHTML;
  btn7 = document.getElementById("btn7").innerHTML;
  btn8 = document.getElementById("btn8").innerHTML;
  // Checking if Player X won or not and after
  // that disabled all the other fields
  console.log("btn0 = " + btn0 + ", btn1 = " + btn1 + ", btn2 = " + btn2)
  if ((btn0 == _symbol && btn1 == _symbol && btn2 == _symbol)) {
    alert("Player " + _symbol + " won");
    disabled(true);
  }

  else if ((btn0 == _symbol && btn3 == _symbol && btn6 == _symbol)) {
    document.getElementById('result').innerHTML = "Player " + _symbol + " won";
    disabled(true);
  }

  else if ((btn0 == _symbol && btn4 == _symbol && btn8 == _symbol)) {
    document.getElementById('result')
      .innerHTML = "Player " + _symbol + " won";
    disabled(true);
  }
  else if ((btn2 == _symbol && btn4 == _symbol && btn6 == _symbol)) {
    document.getElementById('result')
      .innerHTML = "Player " + _symbol + " won";
    disabled(true);
  }
  else if ((btn3 == _symbol && btn4 == _symbol && btn5 == _symbol)) {
    document.getElementById('result')
      .innerHTML = "Player " + _symbol + " won";
    disabled(true);
  }
  else if ((btn0 == _symbol && btn4 == _symbol && btn8 == _symbol)) {
    document.getElementById('result')
      .innerHTML = "Player " + _symbol + " won";
    disabled(true);
  }
  else if ((btn0 == _symbol && btn1 == _symbol && btn2 == _symbol)) {
    document.getElementById('result')
      .innerHTML = "Player " + _symbol + " won";
    disabled(true);

  }
  else if ((btn6 == _symbol && btn7 == _symbol && btn8 == _symbol)) {
    document.getElementById('result')
      .innerHTML = "Player " + _symbol + " won";
    disabled(true);
  }
  // Here, Checking about Tie
  // this code let's us know whether the game is a tie or not//

  else {
    console.log("tie: counter = " + counter);
    if (counter == 9) {
      alert("oops that's a tie try again");
    }
  }
}

/**********************************/
// restart()
// Restart game by clear button text and enable buttons
// Called by ??
/**********************************/
function restart() {
  console.log("restart")
  disabled(false);
  for (i = 0; i < 9; i = i + 1) {
    document.getElementById("btn" + i).innerHTML = ""
  }
  document.getElementById('result')
      .innerHTML = "Tic-Tac-Toe";
  turn = 'O';
  alert("Restarted");
}

/**********************************/
// END OF APP
/**********************************/
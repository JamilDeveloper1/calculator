
function appendNumber(number) {
    document.getElementById("screen").value += number;
  }


  function appendOperator(operator) {
    document.getElementById("screen").value += operator;
  }

  function calculate() {
    var screenValue = document.getElementById("screen").value;
    var operands = screenValue.split(/[-+*/]/); 
    var operator = screenValue.match(/[-+*/]/)[0];


    if (operands.length !== 2 || isNaN(Number(operands[0])) || isNaN(Number(operands[1]))) {
      alert("Undefined calculation!");
      clearScreen();
      return;
    }


// Choose operators

    var result;
    switch (operator) {
      case '+':
        result = Number(operands[0]) + Number(operands[1]);
        break;
      case '-':
        result = Number(operands[0]) - Number(operands[1]);
        break;
      case '*':
        result = Number(operands[0]) * Number(operands[1]);
        break;
      case '/':
        result = Number(operands[0]) / Number(operands[1]);
        break;
      default:
        alert("Undefined operator!");
        clearScreen();
        return;
    }


    document.getElementById("screen").value = result;
  }





// Clear screen


  function clearScreen() {
    document.getElementById("screen").value = "";
  }
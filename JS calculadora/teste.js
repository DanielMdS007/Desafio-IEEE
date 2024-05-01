let n1 = "";
let n2 = "";
let operador = "";
let res = "";

function escreverNumero(numero) {
  if (res !== "" && operador === "") {
    apagar();
  }

  if (operador === "") {
    document.getElementById("display").innerHTML += numero;
    n1 += numero;
  } else if (operador !== "" && n2 === "") {
    document.getElementById("display").innerHTML = "";
    document.getElementById("display").innerHTML = numero;
    n2 = numero;
  } else {
    document.getElementById("display").innerHTML += numero;
    n2 += numero;
  }
}

function apagar() {
  n1 = "";
  n2 = "";
  operador = "";
  res = "";

  document.getElementById("display").innerHTML = "";
}

function selecionarOperador(operadorSelecionado) {
  if (n1 !== "") {
    operador = operadorSelecionado;
  }
}

function calcular(e) {
  e.preventDefault();

  if (n1 !== "" && n2 !== "" && operador !== "") {
    switch (operador) {
      case "+":
        res = parseInt(n1) + parseInt(n2);
        break;

      case "-":
        res = parseInt(n1) - parseInt(n2);
        break;

      case "*":
        res = parseInt(n1) * parseInt(n2);
        break;

      case "/":
        res = parseInt(n1) / parseInt(n2);
        break;
    
      case "^":
        res = parseInt(n1) ** parseInt(n2)
        break;
      case "√":
        res = Math.pow(n1, 1/n2)
      default:
        break;
    }   

    document.getElementById("display").innerHTML = "" + res.toFixed(2);
    n1 = "" + res;
    n2 = "";
    operador = "";
  }
}
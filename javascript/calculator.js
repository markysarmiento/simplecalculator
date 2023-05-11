var number = document.getElementById("number");
var result = document.getElementById("result");

function sum(){   
    result.innerHTML = parseFloat(number.value);
}

function difference(){   
    result.innerHTML = parseFloat(number.value);
}

function product(){   
    result.innerHTML = parseFloat(number.value);
}

function quotient(){   
    result.innerHTML = parseFloat(number.value);
}

function equals(operator) {
    if (operator === '+') {
        var total = parseFloat(document.getElementById("result").value);
        var input = parseFloat(document.getElementById("number").value);
        return total + input;
    }
    if (operator === '-') {
        var total = parseFloat(document.getElementById("result").value);
        var input = parseFloat(document.getElementById("number").value);
        return total - input;
    }
    if (operator === '*') {
        var total = parseFloat(document.getElementById("result").value);
        var input = parseFloat(document.getElementById("number").value);
        return total * input;
    }
    if (operator === '/') {
        var total = parseFloat(document.getElementById("result").value);
        var input = parseFloat(document.getElementById("number").value);
        return total / input;
    }
}

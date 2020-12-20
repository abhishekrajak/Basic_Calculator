let result = null;
let number = 0;
let previousNumber = 0;
let previousSign = null;

let calculate = false;
let solved = false;

function input(event){
    clicked(event.key);
}

function initialise(){
    result = document.getElementById('result');
    result.innerText = number.toString();
}

function reset(){
    number = 0;
    result.innerText = number.toString();
}

function setText(value){
    result.innerText = value;
}

function clicked(numberInput){
    switch (numberInput){
        case '0' :
        case '1' :
        case '2' :
        case '3' :
        case '4' :
        case '5' :
        case '6' :
        case '7' :
        case '8' :
        case '9' :
                    if(solved === true){
                        number = 0;
                        solved = false;
                    }
                    number = number * 10 + parseInt(numberInput);
                    if(calculate === true){
                        setText(previousNumber.toString() + previousSign + number.toString());
                    }else{
                        setText(number.toString());
                    }
                break;
        case '+' : add();
            break;
        case '-' : subtract();
            break;
        case '/' : divide();
            break;
        case '*' : multiply();
            break;
        case '=' :
        case 'Enter' : solve();
            break;
        case 'r' :
        case 'R' : reset();
            break;
    }
}

function add(){
    previousSign = '+';
    previousNumber = number;
    number = 0;
    setText(previousNumber.toString() + '+');
    calculate = true;
}

function subtract(){
    previousSign = '-';
    previousNumber = number;
    number = 0;
    setText(previousNumber.toString() + '-');
    calculate = true;
}

function divide(){
    previousSign = '/';
    previousNumber = number;
    number = 0;
    setText(previousNumber.toString() + '/');
    calculate = true;
}

function multiply(){
    previousSign = '*';
    previousNumber = number;
    number = 0;
    setText(previousNumber.toString() + '*');
    calculate = true;
}

function solve(){
    if(calculate === true){
        switch (previousSign){
            case '+' : number = previousNumber + number;
                        setText(number.toString());
                        break;
            case '-' : number = previousNumber - number;
                setText(number.toString());
                break;
            case '/' : number = previousNumber / number;
                setText(number.toString());
                break;
            case '*' : number = previousNumber * number;
                setText(number.toString());
                break;
        }
    }
    calculate = false;
    previousSign = null;
    solved = true;
}
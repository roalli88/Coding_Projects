/* Event listeners - which maybe more maintainable */ 



function readDigitInput(val) {
    let input;
    switch (val) {
        case '0':
            input = 0;
            break;
        case '1':
            input = 1;
            break;
        case '2':
            input = 2;
            break;
        case '3':
            input = 3;
            break;
        case '4':
            input = 4;
            break;
        case '5':
            input = 5;
            break;
        case '6':
            input = 6;
            break;
        case '7':
            input = 7;
            break;
        case '8':
            input = 8;
            break;
        case '9':
            input = 9;
            break;
        case 'e':
            input = Math.E;
            break;
        case 'pi':
            input = Math.PI;
            break;
        default:
            break;
    }

    displayInput(input);

}
function readToken(tok){
    let token;
    switch (tok) {
        case '+':
            token = '+';
            break;
        case 'x':
            token = '*';
            break;
        case '-':
            token = '-';
            break; 
        case '/':
            token = '/';
            break;       
        case '=':
            token = '=';
            break;   
        case '.':
            token = '.';
            break;   
        default:
            break;
    }
    displayInput(token);
}

function displayInput(val) {
    let text = document.getElementById('display');
    text.value += `${val}`
}


function add() {
    
}

function equals(){
    let text = document.getElementById('display');
    let temp = text.value;
    text.value = '';
    text.value = temp;

}

function clear() {
    let text = document.getElementById('display');
    text.value = '';
}
let exp = "344+69-89*78/10+0.89989";
let opRegex = /[\*\+\-\/]/g
let numRegex = /\d+(\.\d+)?/g
console.log(exp.match(opRegex));
console.log(exp.match(numRegex));
function getPrecedence(char) {
    let precedence = {'+': 1, '-': 1, '*': 2, '/': 2}
    return precedence[char];
}

let isOperator = (val) => "+-/*".includes(val);
function applyOperator(tok, op1, op2) {
    switch (tok) {
        case '+':
            return op1 + op2;
        case '-':
            return op1 - op2; 
        case '/':
            return op1 / op2; 
        case '*':
            return op1 * op2;  
        default:
            return -Infinity;
    }
}
function shuntYard(val){
    let tot = 0;
    let operands = []
    let operators = []
    for (const iterator of val) {
        //found a number
        if (typeof(iterator) === 'number') {
            // add the number to the list
            operands.push(iterator)
          //found an operator
        } else if (isOperator(iterator)){
            if (operators.length === 0) {
                operators.unshift(iterator);
                console.log(iterator);
            } else {
                if (getPrecedence(iterator) <= getPrecedence(operators[0])) {
                    while (getPrecedence(iterator) <= getPrecedence(operators[0])) {
                        let op1 = operands.shift();
                        let op2 = operands.shift();
                        tot += applyOperator(iterator, op1, op2);
                        operators.shift();
                        
                    }
                } else {
                    while (operands.length > 0) {
                        let op1 = operands.shift();
                        let op2 = operands.shift();
                        tot += applyOperator(iterator, op1, op2);
                        operators.shift();


                    }
                }
            }
        }
        else{
            continue;
        }
    }
    return tot;
}

console.log(shuntYard("344 + 69 - 89 * 78"));


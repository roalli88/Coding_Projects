/* Event listeners */ 

document.getElementById('equals').addEventListener(
    "click",
    () => {
        let text = document.getElementById('display');
        let arg = text.value;
        text.value = '';
        let ans = eval(arg);
        if (ans === Infinity) {
            equals("Undefined")
        }
        else{
            equals(ans);
        }
    }
)

/* Reads each button that the user clicks on */
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
        case '(':
            token = '(';
            break;   
        case ')':
            token = ')';
            break;    
        case '^':
            token = '**';
            break;       
    default:
            break;
    }
    // display each token back to the user
    displayInput(token);
}

//displays the value of each clicked button back to the user.
function displayInput(val) {
    
    let text = document.getElementById('display');
    text.value += `${val}`;

    
    

}


//displays the result to the user.
function equals(val){
    let text = document.getElementById('display');
    text.value = '';
    text.value = val;



}
//clears the input field and resets the value to 0.
function clear() {
    let text = document.getElementById('display');
    text.value = '';
}





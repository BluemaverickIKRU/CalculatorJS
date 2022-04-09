let btnList = document.getElementsByClassName('btn');
let clr = document.getElementsByClassName('clear');
let num1 = 0;
let num2 = 0;
let oprt;
let state = false;
let res;

for (let btn of btnList) {
    btn.addEventListener('click',checkAndCalculate);
};

function checkAndCalculate(event) {
    if (event.target.firstChild.data[0] === '=') {
        switch(oprt) {
            case '+':
                res = Number(num1) + Number(num2);
                break;
            case '-':
                res = Number(num1) - Number(num2);
                break;
            case '*':
                res = Number(num1) * Number(num2);
                break;
            case '/':
                res = Number(num1) / Number(num2);
                break;
        }
        document.getElementById('displayNum').value = String(res);
        state = false;
        num1 = res;
    } else if (event.target.firstChild.data[0] === '+' || event.target.firstChild.data[0] === '-' || event.target.firstChild.data[0] === '*' || event.target.firstChild.data[0] === '/') {
        state = true;
        oprt = event.target.firstChild.data[0];
        document.getElementById('displayNum').value = '';
    } else if (!state) {
        document.getElementById('displayNum').value += event.target.firstChild.data[0];
        num1 = document.getElementById('displayNum').value;
    } else {
        document.getElementById('displayNum').value += event.target.firstChild.data[0]
        num2 = document.getElementById('displayNum').value;
    }
}

function clearInputField() {
    document.getElementById('displayNum').value = '';
    num1 = num2 = 0;
    oprt = '';
    state = false;
}

clr[0].addEventListener('click',clearInputField);
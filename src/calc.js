"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calc = void 0;
function Calc(clickedButton, totalValue, display, setTotalValue, setDisplay, setClickedButton) {
    let numberList = [];
    const operatorList = ['+', '-', '*', '/', '%',];
    const bracket = ['(', ')', '()'];
    function newNum(val) {
        numberList.push(val);
        setTotalValue(0);
    }
    console.log('display = ', display);
    if (clickedButton) {
        if (operatorList.includes(display[display.length - 1]) && operatorList.includes(clickedButton)) {
            setClickedButton('');
        }
        else {
            switch (clickedButton) {
                case '-1':
                    setClickedButton('');
                    const neg = +(display) * -1;
                    setDisplay(neg.toString());
                    break;
                case 'clear':
                    console.log('clear');
                    setDisplay('0');
                    setClickedButton('');
                    break;
                case '()':
                    let hasBracketOpened = false;
                    let bracketAmount = 0;
                    for (let i = 0; i < display.length; i++) {
                        if (display[i] == '(') {
                            console.log('has bracket');
                            bracketAmount += 1;
                            hasBracketOpened = true;
                        }
                        else if (operatorList.includes(display[i])) {
                            console.log('no brackets opened');
                            hasBracketOpened = false;
                        }
                    }
                    if (hasBracketOpened === false) {
                        if (operatorList.includes(display[display.length - 1])) {
                            setDisplay(display.concat('('));
                        }
                        else {
                            setDisplay(display.concat('*('));
                        }
                    }
                    else { //Has bracket open
                        //
                        if (display[display.length - 1] === '(') {
                            bracketAmount += 1;
                            setDisplay(display.concat('('));
                        }
                        else {
                            bracketAmount -= 1;
                            setDisplay(display.concat(')'));
                            if (bracketAmount <= 0) {
                                console.log('bracket is all closed');
                                hasBracketOpened = false;
                            }
                        }
                    }
                    setClickedButton('');
                    break;
                case '.':
                    if (display.length <= 1) {
                        setDisplay(display.concat(clickedButton));
                        setClickedButton('');
                    }
                    else {
                        let hasDecimal = false;
                        for (let i = 0; i < display.length; i++) {
                            if (display[i] == '.') {
                                console.log('has decimal');
                                hasDecimal = true;
                            }
                            if (operatorList.includes(display[i])) {
                                console.log('no decimal');
                                hasDecimal = false;
                            }
                        }
                        if (hasDecimal === false) {
                            setDisplay(display.concat('0' + clickedButton));
                        }
                        ;
                        setClickedButton('');
                    }
                    break;
                case '=':
                    if (display[display.length - 1] === '%') {
                        console.log('last was %');
                        console.log('display = ', (+(display) * 0.01));
                        setDisplay((+(display) * 0.01).toString());
                    }
                    else if (operatorList.includes(display[display.length - 1])) {
                        setClickedButton('');
                    }
                    else {
                        setDisplay(eval(display).toString());
                        setClickedButton('');
                    }
                    break;
                default:
                    if (display == '0' && operatorList.includes(clickedButton)) {
                        setClickedButton('');
                    }
                    else if (display == '0' && clickedButton != '.') {
                        setDisplay(clickedButton);
                        setClickedButton('');
                    }
                    else {
                        setDisplay(display.concat(clickedButton));
                        setClickedButton('');
                    }
            }
        }
    }
    // if(clickedOperator){
    // }
}
exports.Calc = Calc;

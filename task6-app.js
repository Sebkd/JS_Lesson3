'use strict'


let piramide = ['x'];
for (let i = 1; i <= 20; i++) {
    let outputWord = piramide.join('');
    console.log(outputWord);
    piramide.push('x');
};
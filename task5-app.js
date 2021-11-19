'use strict'

function iterableI(number) {
    if (number > 10) return false
    else
        console.log(number);
    return true
}

for (let i = 0; iterableI(i); i++) { };
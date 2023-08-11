'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function twoArrays(k, A, B) {
    
    var assertions = [];
    
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b).reverse();
    
    let i = 0;
    
    for(i = 0; i < A.length ; i++) {
        if(A.length > 3 && A.filter((element) => element >= 1).length < 3){
            assertions[i] = false;
        } else { 
            if(A[i] + B[i] >= k) {
                assertions[i] = true;
            } else {
                assertions[i] = false;
            }
        }
    }
    
    console.log(assertions);
    
    assertions = assertions.filter((element) => element == false);
                
    if(assertions.length > 0) {
        return 'NO';
    }
    
    return 'YES';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const k = parseInt(firstMultipleInput[1], 10);

        const A = readLine().replace(/\s+$/g, '').split(' ').map(ATemp => parseInt(ATemp, 10));

        const B = readLine().replace(/\s+$/g, '').split(' ').map(BTemp => parseInt(BTemp, 10));

        const result = twoArrays(k, A, B);

        ws.write(result + '\n');
    }

    ws.end();
}

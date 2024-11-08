"use strict";
{
    // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
    function sumArray(arrays) {
        let sum = 0;
        for (const number of arrays) {
            sum = sum + number;
        }
        return sum;
    }
    // console.log(sumArray([1, 2, 3, 4, 5]));
    sumArray([1, 2, 3, 4, 5]);
}

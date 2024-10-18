// mathModule.js
import { toUpperCase } from './stringModule.js';
import { findMax } from './arrayModule.js';

export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b
}

export default function multiply(a, b) {
    return a * b;
}

export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log(toUpperCase(result.toString()));
}

export function maxMultiplyUpper(arr, val) {
    const arrMax = findMax(arr);
    const multiplyMax = arrMax * val;
    return toUpperCase(multiplyMax.toString());
}
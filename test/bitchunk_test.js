import { high_to_low_BE, low_to_high_BE } from "../play/bitchunk.js";
import { arrayToBigInt_BE, bigIntToBitArray } from "../play/toarray.js";

const bigInt_0 = 20282409603651666483297577335484n;
const array_0 = bigIntToBitArray(bigInt_0, 9);
const array_1 = low_to_high_BE(array_0, 9, 13);
const bigInt_1 = arrayToBigInt_BE(array_1, 13);
const array_2 = low_to_high_BE(array_1, 13, 52);
const bigInt_2 = arrayToBigInt_BE(array_2, 52)
const array_3 = high_to_low_BE(array_2, 52, 26);
const bigInt_3 = arrayToBigInt_BE(array_3, 26);

Deno.test("all test", ()=>{
   bigInt_0 == bigInt_1 == bigInt_2 == bigInt_3
})

console.assert(bigInt_0 == bigInt_1, "array_1")
console.assert(bigInt_0 == bigInt_2, "array_2")
console.assert(bigInt_0 == bigInt_3, "array_3")


const _null = null;

import { arrayToBigInt_BE, bigIntToBitArray } from "../play/toarray.js";

const bigInt_0 = 20282409603651666483297577335484n;

const array_1 = bigIntToBitArray(bigInt_0, 9);
const bigInt_1 = arrayToBigInt_BE(array_1, 9);

console.assert( bigInt_0 == bigInt_1, "bigInt_0 == bigInt_1");

const _null = null


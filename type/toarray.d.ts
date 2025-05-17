/**
 * Converts an array of numbers to a BigInt, treating the array as big-endian.
 *
 * @param arr The array of numbers to convert.  Defaults to an empty array.
 * @param bit The number of bits each element in the array represents. Must be between 1 and 53, inclusive. Defaults to 8.
 * @returns The resulting BigInt.
 * @throws {Error} If the bit width is not within the valid range.
 * @version 0.0.1
 */
export declare function arrayToBigInt_BE(arr?: number[], bit?: number): bigint;

/**
 * Converts a BigInt to an array of numbers, representing the BigInt as a sequence of values with the specified bit width.
 *
 * @param bigint The BigInt to convert. Defaults to 0n.
 * @param bit The number of bits each element in the resulting array should represent. Must be between 1 and 53, inclusive. Defaults to 8.
 * @param length The desired length of the resulting array. If 0, the array will be the minimum length required to represent the BigInt.  Defaults to 0.
 * @returns An array of numbers, where each number represents a chunk of the BigInt.
 * @throws {Error} If the BigInt is negative, or if the bit width is not within the valid range, or if the BigInt is too large for the specified length.
 * @version 0.0.1
 */
export declare function bigIntToBitArray(bigint?: bigint, bit?: number, length?: number): number[];

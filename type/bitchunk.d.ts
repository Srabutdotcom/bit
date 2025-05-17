/**
 * Converts an array of numbers, representing values with a higher bit width,
 * to an array of numbers representing values with a lower bit width (big-endian).
 *
 * @param words The input array of numbers. Defaults to `[123]`.
 * @param fromBit The original bit width of the values in the input array. Defaults to 16.
 * @param toBit The desired bit width of the values in the output array. Defaults to 8.
 * @returns An array of numbers, where each number represents a value with the `toBit` width.
 * @throws {RangeError} If `fromBit` is less than `toBit`.
 * @version 0.0.0
 */
export declare function high_to_low_BE(words?: number[], fromBit?: number, toBit?: number): number[];

/**
 * Converts an array of numbers, representing values with a lower bit width,
 * to an array of numbers representing values with a higher bit width (big-endian).
 *
 * @param words The input array of numbers. Defaults to `[123]`.
 * @param fromBit The original bit width of the values in the input array. Defaults to 8.
 * @param toBit The desired bit width of the values in the output array. Defaults to 16.
 * @returns An array of numbers, where each number represents a value with the `toBit` width.
 * @throws {RangeError} If `fromBit` is greater than `toBit` or if `toBit` is greater than 52.
 * @version 0.0.0
 */
export declare function low_to_high_BE(words?: number[], fromBit?: number, toBit?: number): number[];

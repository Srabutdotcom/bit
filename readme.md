````markdown
# 🧮 Array/BigInt Conversion Library

A lightweight and robust JavaScript utility library for converting between arrays of fixed-width numbers and `BigInt`, with support for different bit widths and big-endian encoding.
@version 0.0.1

---

## ✨ Features

- Convert `BigInt` to arrays and vice versa.
- Handle various bit widths (1 to 53 bits).
- Switch between high-bit and low-bit representations.
- Fully big-endian safe.
- Validates input for correctness and edge cases.

---

## 📦 Installation

Import:

```js
import {
  arrayToBigInt_BE,
  bigIntToBitArray,
  high_to_low_BE,
  low_to_high_BE
} from 'jsr:@aicone/bit';
````

---

## 📘 API Reference

### `arrayToBigInt_BE(arr = [], bit = 8)`

Converts a big-endian array of numbers to a `BigInt`.

* **Parameters:**

  * `arr` (`number[]`): Input array.
  * `bit` (`number`): Bit width of each element (1–53).
* **Returns:** `BigInt`
* **Throws:** `RangeError` if `bit` is out of bounds.

**Example:**

```js
arrayToBigInt_BE([0x12, 0x34], 8); // 0x1234n => 4660n
```

---

### `bigIntToBitArray(bigint = 0n, bit = 8, length = 0)`

Converts a `BigInt` to a big-endian array of numbers, each with a given bit width.

* **Parameters:**

  * `bigint` (`BigInt`): The number to convert.
  * `bit` (`number`): Bit width per element (1–53).
  * `length` (`number`): Optional fixed output length.
* **Returns:** `number[]`
* **Throws:** If the number is negative, bit width is invalid, or too large for `length`.

**Example:**

```js
bigIntToBitArray(0x1234n, 8); // [0x12, 0x34] => [18, 52]
```

---

### `high_to_low_BE(words = [123], fromBit = 16, toBit = 8)`

Converts an array of high-bit-width values to lower-bit-width values, preserving big-endian order.

* **Parameters:**

  * `words` (`number[]`): Input array.
  * `fromBit` (`number`): Source bit width.
  * `toBit` (`number`): Target bit width (must be ≤ `fromBit`).
* **Returns:** `number[]`
* **Throws:** `RangeError` if `fromBit < toBit`.

**Example:**

```js
high_to_low_BE([0xABCD, 0x1234], 16, 8); // [171, 205, 18, 52]
```

---

### `low_to_high_BE(words = [123], fromBit = 8, toBit = 16)`

Converts an array of low-bit-width values to higher-bit-width values, preserving big-endian order.

* **Parameters:**

  * `words` (`number[]`): Input array.
  * `fromBit` (`number`): Source bit width.
  * `toBit` (`number`): Target bit width (must be ≥ `fromBit` and ≤ 52).
* **Returns:** `number[]`
* **Throws:** `RangeError` if `fromBit > toBit` or `toBit > 52`.

**Example:**

```js
low_to_high_BE([0xAB, 0xCD, 0x12, 0x34], 8, 16); // [0xABCD, 0x1234]
```

---

## 🧪 Example Usage

```js
const arr = [0x12, 0x34];
const bigint = arrayToBigInt_BE(arr, 8); // 4660n

const back = bigIntToBitArray(bigint, 8); // [18, 52]

const packed = high_to_low_BE([0xABCD, 0x1234], 16, 8); // [171, 205, 18, 52]

const unpacked = low_to_high_BE(packed, 8, 16); // [0xABCD, 0x1234]
```

---

### Contributing

Contributions to improve the library are welcome. Please open an issue or pull request on the GitHub repository.

### Donation
- https://paypal.me/aiconeid 

## 🛡️ License

MIT License



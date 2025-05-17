//@ts-self-types="../type/toarray.d.ts"
export function arrayToBigInt_BE(arr=[], bit = 8) {
   let result = 0n;
   for (let i = 0; i < arr.length; i++) {
      result = (result << BigInt(bit)) + BigInt(arr[i]);
   }
   return result;
}

export function bigIntToBitArray(bigint=0n, bit=8, length = 0) {
   if (bigint < 0n) throw new Error("Only unsigned BigInts are supported");
   if (bit <= 0 || bit > 53) throw new Error("Bit width must be between 1 and 53");

   const mask = (1n << BigInt(bit)) - 1n;
   const result = [];

   while (bigint > 0n) {
      result.unshift(Number(bigint & mask)); // Get the lowest `bit` bits
      bigint >>= BigInt(bit);
   }

   // Pad to a fixed length if specified
   if (length !== 0) {
      const padding = length - result.length;
      if (padding < 0) throw new Error("BigInt too large for specified length");
      while (result.length < length) result.unshift(0);
   }

   return result;
}



//@ts-self-types="../type/bitchunk.d.ts"
export function high_to_low_BE(words = [123], fromBit = 16, toBit = 8) {
   if (fromBit < toBit) return low_to_high_BE(words, fromBit, toBit)
   const toBase = 2 ** toBit
   const result = [];

   // Make a copy so we don’t modify original
   const buffer = words.slice();

   let acc = 0, bit = 0, carry = 0;

   //while (true) {
   for (let j = buffer.length - 1; j >= 0; j--) {
      // Add the current base-26 limb into the accumulator
      acc = carry + (buffer[j] || 0) * 2 ** 0;
      bit += j < 0 ? 0 : fromBit;

      if (bit >= toBit) {
         while (true) {
            result.unshift(acc % toBase);
            carry = Math.floor(acc / toBase)
            bit -= toBit;

            if (carry < toBase) {
               result.unshift(carry);
               carry = 0;
               bit -= toBit;
               break;
            }
         }
      } else {
         bit -= toBit;
         carry = acc;
      }
   }
   return result
}

export function low_to_high_BE(words = [123], fromBit = 8, toBit = 16) {
   if (fromBit > toBit) return high_to_low_BE(words, fromBit, toBit)
   if( toBit> 52) throw new RangeError(`toBit cann't be more than 52`)
   const toBase = 2 ** toBit
   const result = [];

   // Make a copy so we don’t modify original
   const buffer = words.slice();

   let acc = 0, bit = 0, carry = 0;

   for (let j = buffer.length - 1; j >= 0; j--) {
      // Add the current base-26 limb into the accumulator
      acc = carry + buffer[j] * 2 ** bit;
      bit += fromBit;

      if (bit >= toBit) {
         if (acc < toBase) {
            result.unshift(acc);
            carry = 0;
         } else {
            result.unshift(acc % toBase);
            carry = Math.floor(acc / toBase)
         }
         bit -= toBit
      } else {
         carry = acc;
      }
   }

   // Handle any remaining carry
   if (carry > 0) {
      result.unshift(carry);
   }

   return result;
}
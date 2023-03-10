// Define a function that takes a Hamming block and checks for corrupted bits
const hammingChecker = (block) => {
    // Split the block into an array of bits
    let bits = block.split("");
    // Initialize an array to store the parity bits
    let parityBits = [];
    // Loop through the powers of two from 1 to the length of the block
    for (let i = 0; i < Math.ceil(Math.log2(bits.length)); i++) {
      // Calculate the index of the parity bit as 2^i - 1
      let index = Math.pow(2, i) - 1;
      // Store the parity bit value in the array
      parityBits.push(bits[index]);
      // Initialize a counter for the number of ones in the region
      let ones = 0;
      // Loop through the region starting from the index of the parity bit
      for (let j = index; j < bits.length; j++) {
        // Check if j is within one step size of index using bitwise and operation
        if ((j & (index + 1)) == index + 1) {
          // Increment the counter if the bit is one
          if (bits[j] == "1") {
            ones++;
          }
        }
      }
      // Check if the number of ones is odd or even and set the parity bit accordingly
      if (ones % 2 == 0) {
        bits[index] = "0";
      } else {
        bits[index] = "1";
      }
    }
    
     // Join the bits into a string and compare it with the original block 
     let fixedBlock = bits.join("");
     
     if (fixedBlock == block) {
       return block;
     } else {
       return fixedBlock;
     }
  }
  
  // Test cases
  
  console.log(hammingChecker("0111001011100100")); //=> "0010001011100100"
  console.log(hammingChecker("0111001111100100")); //=> "1111001011100100"
  console.log(hammingChecker("1110000011100100")); //=> "1011000011100100"
  console.log(hammingChecker("0000000011100100")); //=> "0101000011100100"

export default hammingChecker;
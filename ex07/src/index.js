function main(numOne, numTwo) {
  // Only change code below this line

  var remainder;

  if (numTwo === 0) {
    remainder = "Nema dijeljenja sa nulom, zdrao!";
  } else {
    remainder = Math.floor(numOne) % Math.floor(numTwo);
  }

  // Only change code above this line

  return remainder;
}

console.log(main(5, 2));
console.log(main(15, 4));
console.log(main(102, 25));
module.exports = main;

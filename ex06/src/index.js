function main(numOne, numTwo) {
  // Only change code below this line

  var myQuotient;

  if (numTwo === 0) {
    myQuotient = "Nema dijeljenja sa nulom, zdrao!";
  } else {
    myQuotient = numOne / numTwo;
  }

  // Only change code above this line

  return myQuotient;
}

console.log(main(5.0, 2.0));
console.log(main(16.5, 5.5));
console.log(main(102.0, 25.5));
module.exports = main;

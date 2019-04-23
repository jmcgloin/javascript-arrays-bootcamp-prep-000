var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, el) {
  return [el, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, el) {
  array.unshift(el);
  console.log(array);
}

function addElementToEndOfArray(array, el) {
  return [...array, el];
}

function destructivelyAddElementToEndOfArray(array, el) {
  array.push(el);
  console.log(array);
}

destructivelyAddElementToBeginningOfArray([1,2], "hi");
destructivelyAddElementToEndOfArray(1,2], "hi");
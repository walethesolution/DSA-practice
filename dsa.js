// Sets
/*
const numbersArray = [10, 20, 30, 40, 50, 60, 70, 80, 100, 50, 60, 80];
const lettersArray = ["A", "B", "C", "D", "E", "F", "G"];

const numbersArraySet = new Set(numbersArray);

let setArray = [...numbersArraySet];

numbersArraySet.add(4);
numbersArraySet.add(lettersArray);
numbersArraySet.delete(lettersArray);

setArray = [...numbersArraySet];
let total = 0;
numbersArraySet.has(2);
// console.log(numbersArraySet);

const newArray = [...numbersArraySet];
const numbersMap = new Map();

let sum = 0;
numbersArray.forEach((number) => {
  sum += number;
  return sum;
});

const twoValues = numbersMap.set(Math.min(number, sum), Math.max(sum, 65));
console.log(twoValues);
/*
 for loop 1
  for (let number of numbersArraySet.values()) {
    total += number;
  }

 for loop 2
 numbersArraySet.forEach((num) => (total = total + num));
 console.log(total);
*/

// Sum pairs
/*
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const N = 10;

function sumPairs(numbersArray, N) {
  // create 2 maps
  // loop through the numbers array
  // put each number into one of the new maps
  // loop through the numbers array
  // get the difference between N and the number
  // if a difference is present in the map
  // set the minimum and maximum value of the numbers into the other map
  // return map as an array

  const firstMap = new Map();
  const secondMap = new Map();

  numbersArray.forEach((number) => firstMap.set(number));
  numbersArray.forEach((number) => {
    let difference = N - number;

    if (difference !== number) {
      if (firstMap.has(difference)) {
        secondMap.set(
          Math.min(difference, number),
          Math.max(difference, number)
        );
      }
    }
  });
  return [...secondMap];
}

console.log(sumPairs(numbersArray, N));
*/

// Same Letters
// const words = ["pair", "per", "pole", "pear", "peer", "reap", "lope"];

// function sameLetters(words) {
//   const result = new Map();

//   words.forEach((word) => {
//     let unique = new Set(word);
//     let arrayLetters = [...unique];

//     let sortedAndJoinWords = arrayLetters.sort().join("");

//     if (result.has(sortedAndJoinWords)) {
//       result.get(sortedAndJoinWords).push(word);
//     } else {
//       result.set(sortedAndJoinWords, [word]);
//     }
//   });
//   return result;
// }

// console.log(sameLetters(words));

// Intersection of arrayLetters

// const a = [10, 20, 30, 40, 50, 5, 70, 80, 100, 200, 300, 400];
// const b = [50, 30, 20, 10, 200, 300, 400];

// function intersection(a, b) {
//   const newMap = new Map();
//   const result = [];

//   a.forEach((e) => {
//     newMap.set(e);
//   });

//   b.forEach((e) => {
//     if (newMap.has(e)) {
//       result.push(e);
//     }
//   });
//   return result;
// }
// console.log(intersection(a, b));

// Write a function that returns the maximum value in an array

const numbersArray = [10, 2, 4, 50, 5, 70, 80];

function findMax(arr, start, end) {
  let max = 0;

  for (let i = start; i < end; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax(numbersArray, 2, numbersArray.length));

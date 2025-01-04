/**
  * Task description: Write a method that to combine elements from 3 arrays to 
  * generate a string
  * Expected Result: (['A', 'B', 'C'],['1', '2', '3', '4', '5', '6', '7', '8'],['a', 'e', 'i', 'o', 'u']) => 'A1aB2eC3i4o5u678'
  * Task Complexity: 1 of 5
*/

const multi_combine = (characters, numbers, vowels) => {
  let result = '';
  const maxLength = Math.max(characters.length, numbers.length, vowels.length);

  for (let i = 0; i < maxLength; i++) {
    if (!characters[i]) {
      result = result
    } else {
      result += characters[i];
    }
    if (!numbers[i]) {
      result = result
    } else {
      result += numbers[i];
    }
    if (!vowels[i]) {
      result = result
    } else {
      result += vowels[i];
    }
  }
  return result;
}

// Do not edit below this line
module.exports = multi_combine;

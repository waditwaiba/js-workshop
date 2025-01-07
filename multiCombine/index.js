/**
  * Task description: Write a method that to combine elements from 3 arrays to 
  * generate a string
  * Expected Result: (['A', 'B', 'C'],['1', '2', '3', '4', '5', '6', '7', '8'],['a', 'e', 'i', 'o', 'u']) => 'A1aB2eC3i4o5u678'
  * Task Complexity: 1 of 5
*/

const multi_combine = (characters, numbers, vowels) => {
  let result = "";
  const max = Math.max(characters.length, numbers.length, vowels.length)
  for (let i = 0; i < max; i++) {
    const character = characters[i] || ""
    const number = numbers[i] || ""
    const vowel = vowels[i] || ""
    result += character + number + vowel
  }
  return result
}

module.exports = multi_combine
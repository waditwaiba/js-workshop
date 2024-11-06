/** 
  * Task description: Write a method that creates a new array with given values 
  * Expected Result: (3, 'a') => ['a', 'a', 'a'] 
  * Task Complexity: 1 of 5 
*/
const fill = (arraySize, value) => {
  let result = [];
  for(let i = 0 ;i < arraySize; i++){
    result.push(value);
  }
  return result;
}

module.exports = fill;
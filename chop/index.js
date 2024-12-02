/**
  * Task description: Write a method that to chop a string into chunks of a given length
  * Expected Result: (javascript) =>  ["ja", "va", "sc", "ri", "pt"]
  * Task Complexity: 1 of 5
*/
const chop = (str, chunk) => {
  let Result = [];
  for (let i = 0; i < str.length; i = i + chunk) {
    //  0=j 0+2=ja
    //  2=v 2+2=va
    Result.push(str.slice(i, i + chunk))
  }
  return Result
}

module.exports = chop;

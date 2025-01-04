/**
  * Task description: Write a method to convert a string into camel case.
  * Expected Result: (JavaScript exercises) => "JavaScriptExercises"
  * Task Complexity: 1 of 5
*/
const camelize = (str) => {
  const words = str.split(" ");
  const formattedWords = []
  for (const word of words) {
    let formattedWord = ""
    for (let i = 0; i < word.length; i++) {
      console.log("in")
      if (i === 0) {
        formattedWord = formattedWord + word[i].toUpperCase()
      } else {
        formattedWord = formattedWord + word[i].toLowerCase()
      }
    }
    formattedWords.push(formattedWord)
  }

  return formattedWords.join("")
}

module.exports = camelize
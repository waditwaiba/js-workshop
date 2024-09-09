const camelize = (str) => {
  const words = str.split(" ");
  const formattedWords = [];
  for (const word of words) {
    let formattedWord = "";
    for (let i = 0; i < word.length; i++) {
      if (i === 0) {
        formattedWord = formattedWord + word[i].toUpperCase();
      } else {
        formattedWord = formattedWord + word[i].toLowerCase();
      }
    }
    formattedWords.push(formattedWord);
  }

  return formattedWords.join("");
};

const output = camelize("JavaScript exercises");
console.log(output);

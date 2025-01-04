const getTheTitles = function (books) {
    let result = [];
    for (let i in books) {
        result.push(books[i].title)
    }
    return result;
};


// Do not edit below this line
module.exports = getTheTitles;

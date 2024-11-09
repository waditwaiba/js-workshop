const palindromes = function (pal) {
    let er = /[^A-Za-z-0-9]/g;
    pal = pal.replace(er, "").toLowerCase();
    let Len = pal.length;
    for (let i = 0; i < Len / 2; i++) {
        if (pal[i] !== pal[[Len -1-i]]) {
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;

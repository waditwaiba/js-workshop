/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    const herCandies = candyType.length / 2;
    const uniqueCandyTypes = new Set(candyType);
    for (let i = 0; i < candyType.length; i++) {
        if (!uniqueCandyTypes.has(candyType[i])) {
            uniqueCandyTypes.add(candyType[i]);
        }
    }
    return Math.min(uniqueCandyTypes.size, herCandies);
}

module.exports = distributeCandies
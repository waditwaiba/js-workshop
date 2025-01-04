/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    const outgoing = []
    for (const path of paths) {
        if (!outgoing.includes(path[0])) {
            outgoing.push(path[0])
        }
    }
    for (const path of paths) {
        if (!outgoing.includes(path[1])) {
            return path[1]
        }
    }
}
module.exports = destCity;
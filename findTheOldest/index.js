
const findTheOldest = function (names) {

    // checking is empty
    if (names.length == 0) {
        return "No one"
    }

    // define oldest 
    let oldest = 0;

    // Find the maximum age
    for (let i = 0; i < names.length; i++) {
        if (names[i].yearOfDeath - names[i].yearOfBirth > oldest) {
            oldest = names[i].yearOfDeath - names[i].yearOfBirth
        }
    }

    // find oldest person and return
    return names.find((a) => a.yearOfDeath - a.yearOfBirth == oldest)

}


// Do not edit below this line
module.exports = findTheOldest;

const findTheOldest = function (people) {
   let ages = []
   let oldestPerson;

   for (let i in people) {
      const currentYear = new Date().getFullYear()
      const yearOfDeath = people[i].yearOfDeath || currentYear
      ages.push(yearOfDeath - people[i].yearOfBirth)

   }
   let maxAge = 0
   let maxIndex = 0
   for (let i = 0; i < ages.length; i++) {
      if (ages[i] > maxAge) {
         maxAge = ages[i]
         maxIndex = i
      }

   }
   oldestPerson = people[maxIndex];
   return oldestPerson
}
module.exports = findTheOldest;






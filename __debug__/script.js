// 1. When would you use a function in your code?
//code repeated we use function
// 2. How do you declare a variable in JavaScript?
let a
// 3. What is the difference between let and const?
//can be changed the value of let but the value of const is always constant can't change the value
// 4. How do you assign a value to a variable?
let b = 13
// 5. How do you concatenate strings in JavaScript?
let A = "aysha"
let B = "zenha"
let c = A + B
console.log(c)
let text1 = "sea"
let text2 = "food"
let result = text1.concat(text2)
console.log(result)

// 6. How do you declare and initialize an array?
let myArray = [1, 2, 3, 4,]
console.log(myArray)
// 7. What is the difference between an array and an object?
let array = [1, 2, 3, 4, 5, 6,]
console.log(array[2])
let obj = {
       name: "aysha",
       age: 18
}
console.log(obj.name)
// 8. How can you access an element in an array?
let height = [153, 160, 156]
console.log(height[2])//access the third element using their index from 0
// 9. How do you add an item to the end of an array?
let length = [23, 54, 76]
length.push(32)
console.log(length)
// 10. How do you remove the last item from an array?
let difference = [4, 6, 8]
difference.pop()
console.log(difference)
//11. What is the purpose of using const to declare a variable?
//to declare a variable that cannot be reassigned a new value
// 12. How do you create an empty array in JavaScript?
let emptyarray = []
// 13. How do you check if a variable is undefined?
let z
console.log(z)

// 14. How can you convert a string to a number?
let str = "23"
let num = Math.floor(str)
console.log(num)
// 15. When would you use an if statement in your code?  



// 16. How do you write an if-else statement?
function canEnter(gender) {
       if (gender == "female") {
              return "allowed"
       } else {

              return "notallowed"
       }
}

console.log(canEnter("girl"))

// 17. How do you compare two values in JavaScript?

// 18. How do you check if a variable is equal to a specific value?
// 19. How do you handle multiple conditions in an if statement?
// 20. How do you write a nested if statement?
// 21. How do you use logical operators (&&, ||, !) in conditions?
// Loops and Iteration
// 22. How do you write a for of loop?
// 23. What is the purpose of using a loop in programming?
// 24. How do you access the index of elements while iterating over an array?
// 25. What is the difference between for and for of loops?
// 26. How do you break out of a loop early?
// 27. How do you skip the current iteration in a loop?
// 28. How do you use the for loop to iterate over an array?
// 29. How can you use a loop to sum the values in an array?
function printpattern(n) {
       let i = 0;
       let r = " ";
       while (i < n) {
              r = r + "";
              console.log(r)
              i = i + 1
       }
}
printpattern(5)
printpattern(7)
printpattern(10)
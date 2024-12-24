

// function Longtask(milliSec) {
//     let dt = new Date()
//     while ((new Date() - dt) <= milliSec) {

//     }
// }

// function showEnd() {
//     console.log("End");
// }
// console.log("Started");
// setTimeout(showEnd, 5000)
// console.log("Started");
// setTimeout(showEnd, 5000)
// console.log("Started");
// setTimeout(showEnd, 5000)


// call back : function that is passed as an argument to another function and is called after the completion of the function it is passed to

function hello(name) {
    console.log("Name : ", name);
}

function hey(callBack) {
    callBack("Ahmed Swabah")
}

hey(hello)
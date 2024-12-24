function EvenNumbers(size) {
    let Result = []
    for (let i = 0; i < size; i++) {
        if (i % 2 == 0) {
            Result.push(i)
        }
    }
    return Result.join(",");
}


console.log(EvenNumbers(15));

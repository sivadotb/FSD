const arr = [1,2,3,4,5,6,7]

console.log(arr)

const multFive = (num) => {
    return num * 5; //'num' here, is the value of the array.
    }

const arr2 = arr.map(multFive)
arr2.push(100)
console.log(arr2)
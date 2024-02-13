//      Exercise 1
// let arr = [1,2,3,4,5]
// let arrToStr = arr.map((e)=>{
//     return e.toString()
// })
// console.log(arrToStr);

//        Exercise 2
// let arr = [1,2,3,4,5]
// let arrToStr = arr.map((e)=>{
//     let square = e*e
//     return square.toString()
// })
// console.log(arrToStr);

//  Exercise 3

// let arr = [1,2,3,4,5]
// let arrToStr = arr.filter((e)=>e%2===0)

// console.log(arrToStr);

    // Exercise 4
// let character = ["a","r","e","i","w","u","o"]
// let vowels = ["a",'e','i','o','u']
// let filterVowels = character.filter((ch)=>vowels.includes(ch))
// console.log(filterVowels);

    // Exercise 5
// let num = [1,2,3,4,5,6]
// let squareArrayGreaterThree = num.filter((a)=>a>3).map((a)=>a*a)
// console.log(squareArrayGreaterThree);


//  Exercise 6
const namee = ["Anshal","umer","shayan"]
let listObject = namee.map((namee,index)=>{
    return {namee:namee ,index:index}
})

console.log(listObject);
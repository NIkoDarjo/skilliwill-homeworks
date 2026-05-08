// // davaleba 1
// const array = [{name: 'Temo', age: 25},
//                 {name: 'Lasha', age: 21},
//                 {name: 'Ana', age: 28}]

// function youngestage() {
//     let minage = array[0].age;

//     for (let value of array) {
//         if (value.age < minage) {
//             minage = value.age;
//         }
//     }
//     return minage
    
// }

// console.log(youngestage())
// // davaleba 2
// const user = { name: "Temo", age: 25 }
// function copyuser() {
//     const y = {}
//     for(let i in user){
//         y[i]=user[i]
//     }
//     return y
// }


// console.log(copyuser())
// // davaleba 3
// function roll(){
//     return parseInt(Math.random()*6)+1}  
// let acount = 0
// let bcount = 0
// let a = 0
// let b = 0
// while (a !== 3){
//     a = roll()
//     acount++
//     console.log("pirvelma motamashem gaagora:", a)

// }
// while (b !== 3){
//     b = roll()
//     bcount++
//     console.log("meore motamashem gaagora:", b)

// }

// if (acount<bcount){
//     console.log("gamarjvebulia pirveli motamashe")
// }else if(bcount<acount){
//     console.log("gamarjvebulia meore motamashe")

// }else{
//     console.log("frea")
// }
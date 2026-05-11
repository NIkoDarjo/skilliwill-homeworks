// //davaleba 1
// const x = (...args) => {
//     let total = 0
//     let times = 1
//     let index = 0
//     for(let i of args){
//         if(index>1){
//             times = times * i

//         }else{
//             total = total + i
//         }
//         index = index +1
//     }
//     return[total+times]
// }
// console.log(x(2,3,4,5,2))
// // davaleba 2

// const user = {
//     banks: [{},{},{
//         address:{
//             city:"tbilisi"
//         }
//     }]
// }

// function getcity(){
//     const {banks:[{},{},{address:{city} = {}}]} = user
//     return city
// }
// console.log(getcity())
// // davaleba 3

// function copyobject(object){
//     let copy = {...object}
//     for (let key in copy){
//         if(typeof copy[key] === "object"){
//             copy[key] = copyobject(copy[key])
//         }
//     }
//     return copy
// }
// user = {name: "Niko",
//     address: {
//         city: "Tbilisi"
//     }
// };

// newuser = copyobject(user)
// console.log(newuser)

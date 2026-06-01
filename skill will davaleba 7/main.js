// // davaleba 1
// function time(delay){
//     return new Promise((resolve) => {
//         setTimeout(resolve,delay)
//     })
// }
// time(3000).then((რეს) => console.log("3"))

// // davaleba 2
// function time(delay) {
//     return new Promise((resolve) => {
//     setTimeout(resolve, delay)

  
//   })
// }

// async function maketoys(delay) {
//     await time(delay)
//     console.log("სათამაშო დამზადდა")
  
// }

// async function delivertoy(delay) {
//     await time(delay)
//     console.log("სათამაშო მიეწოდა მომხმარებელს")
  
// }

// async function selltoy(delay) {
//   await time(delay)
//   console.log("სათამაშო გაიყიდა")
// }

// // maketoys(3000)
// //   .then(() => delivertoy(2000))
// //   .then(() => selltoy(1000))
// //   .then(() => console.log("პროცესი დასრულდა"))
// //   .catch((error) => console.log("error:", error));

// async function toyshop() {
//   try {
//     await maketoys(3000)
//     await delivertoy(2000)
//     await selltoy(1000)


//   } catch (error) {
//     console.log("error")
//   }
// }

// toyshop()



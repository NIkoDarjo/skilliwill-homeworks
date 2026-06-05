// // 1
// function expo(num ,power ,cb ){
//     if(power === 0 ) return 1
//     if (power === 1) return num
//     let result = 1

//     for(let i = 0 ; i<power ; i++){
//         result = cb(result,num)
//     }
//     return result


// }
// const a = expo(4,2,(result,num ) =>result* num)
// const b = expo(4,5,(result,num) =>result* num)
// console.log(a)
// console.log(b)

// // 2

// const Div = document.createElement("div")
// document.body.appendChild(Div)

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(res => res.json())
//   .then(data => {
//     data.forEach(p=> {
//       const div = document.createElement("div")

//       const title = document.createElement("h1")
//       title.textContent = p.title

//       const body = document.createElement("h1")
//       body.textContent = p.body

//       div.append(title)
//       div.append(body)
//       Div.append(div)
//     })
//   })
//   .catch(err => console.log(err))


// // 3
// async function deepcopy(o) {
//     return new Promise((resolve, reject) => {
//         if(typeof o !=="object" || o == null){
//             reject("ობიექტი უნდა იყოს")
            
//     }

//     resolve( {...o})
//     })
    
    
// }

// const obj = 1

// deepcopy(obj)
//   .then(res => console.log(res))
//   .catch(err => console.log(err))
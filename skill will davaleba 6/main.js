// // davaleba 1
// const btn = document.createElement("button")
// btn.textContent = "open modal"

// document.body.appendChild(btn)


// const overlay = document.createElement("div")


// overlay.style.backgroundColor = "rgba(0,0,0,0.5)"
// overlay.style.display = "none"
// document.body.append(overlay)
// overlay.textContent = "hello"

// btn.addEventListener("click", () => {

//     overlay.style.display = ""

// })
// // davaleba 2
// const btn = document.querySelector(".button")

// const search = document.querySelector(".input1")
// btn.addEventListener("click", (e) => {
//     e.preventDefault()
//     if(search.value === "red" ||
//        search.value === "black" ||
//        search.value === "green" ||
//        search.value === "blue" ||
//        search.value === "white"
//     ){
//         document.body.style.backgroundColor = search.value
//     }else {
//         alert("ასეთი ფერი არ არსებობს")
//     }
// })
// // davaleba 3
// const button = document.querySelector(".btn")

// const average = document.querySelector(".num")

// const result = document.querySelector(".result")

// button.addEventListener("click" , (e) => {
//     e.preventDefault()
//     const numbers = average.value.split(":")
//     let x = 0

//     for (let i = 0; i<numbers.length;i++){
//         x = x+Number(numbers[i])
//     }
//     const y = x/numbers.length

//     result.textContent = y


   
// })
// // davaleba 1


// const button1 = document.createElement("button") 
// const buttontext = document.createTextNode("click")

// button1.appendChild(buttontext)

// const divel1 = document.createElement("div") 
// const nodeel = document.createTextNode("hello all")

// divel1.appendChild(nodeel)

// document.body.append(button1 , divel1)

// button1.addEventListener("click" , () => {
    
//     divel1.remove()
// })

// // davaleba 2


// const divel1 = document.createElement("div") 
// divel1.id = "card"
// const h2 = document.createElement("h2") 
// const h2text = document.createTextNode("gandalf")

// h2.appendChild(h2text)

// const link = document.createElement("a");
// link.href = "#"
// const linktext = document.createTextNode("Go to profile")
// link.appendChild(linktext)

// divel1.append(h2 , link)
// document.body.appendChild(divel1)

// davaleba 3 მხოლოდ მესამეს ჭირდება html ში და css ში დაწერილი კოდები
const div1 = document.querySelector(".div1")
const div2 = document.querySelector(".div2")
const div3 = document.querySelector(".div3")
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {

        if (btn.textContent === "20") {
            btn.style.backgroundColor = "green"
        } else {
            btn.style.backgroundColor = "red"
        }
        
    
    })
})

document.querySelectorAll(".btn2").forEach(btn => {
    btn.addEventListener("click", () => {

        if (btn.textContent === "291") {
            btn.style.backgroundColor = "green"
        } else {
            btn.style.backgroundColor = "red"
        }
   
  
    })
})
document.querySelectorAll(".btn3").forEach(btn => {
    btn.addEventListener("click", () => {

        if (btn.textContent === "6") {
            btn.style.backgroundColor = "green"
        } else {
            btn.style.backgroundColor = "red"
        }

    
    })
})
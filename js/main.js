"use strict"
const kgInput = document.querySelector("input")
const alert = document.querySelector(".empty")

let alerts = [document.querySelector(".grams"), document.querySelector(".pound"), document.querySelector(".ounces")]
let convert = [1 / 1000, 1 / 2.20462262185, 1 / 35.27396195]
const words = ["grams", "pounds", "ounces"]
kgInput.addEventListener("keyup", function (e) {
    let kg = e.target.value
    if (kg === " " || kg < 0) {
        alert.classList.replace("d-none", "d-block")
        setTimeout(() => {
            alert.classList.replace("d-block", "d-none")
        }, 1500)
    }
    else {
        for (let i = 0; i <= alerts.length; i++) {
            alerts[i].classList.replace("d-none", "d-block")
            alerts[i].innerHTML = `<h4>
${words[i]}
<br/>
${kg / convert[i]}
</h4>`
        }


    }
})
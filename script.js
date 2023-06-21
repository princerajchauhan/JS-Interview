

let head = document.getElementsByClassName('head')[0]

let firstDay = document.getElementById('firstDay')
let secondDay = document.getElementById('secondDay')
let thirdDay = document.getElementById('thirdDay')


function day1() {
    head.innerText = "Day - 1"
    head.style.color = "aqua"
    firstDay.style.display = "block"
    secondDay.style.display = "none"
    thirdDay.style.display = "none"
}

function day2() {
    head.innerText = "Day - 2"
    head.style.color = "yellow"
    secondDay.style.display = "block"
    firstDay.style.display = "none"
    thirdDay.style.display = "none"
}

function day3() {
    head.innerText = "Day - 3"
    head.style.color = "orchid"
    secondDay.style.display = "none"
    firstDay.style.display = "none"
    thirdDay.style.display = "block"
}
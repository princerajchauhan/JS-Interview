

let head = document.getElementsByClassName('head')[0]

let firstDay = document.getElementById('firstDay')
let secondDay = document.getElementById('secondDay')


function day1() {
    head.innerText = "Day - 1"
    head.style.color = "aqua"
    firstDay.style.display = "block"
    secondDay.style.display = "none"
}

function day2() {
    head.innerText = "Day - 2"
    head.style.color = "yellow"
    firstDay.style.display = "none"
    secondDay.style.display = "block"
}
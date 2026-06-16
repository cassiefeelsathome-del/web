let scored = 0

let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
document.getElementsByClassName("home")

function scoreAssignment(elem) {
    if (elem.classList.contains('home')) {
        homeEl.innerText = parseInt(homeEl.innerText) + scored
    } else if (elem.classList.contains('guest')) {
        guestEl.innerText = parseInt(guestEl.innerText) + scored
    }
    scored = 0

}

function addThree(elem){
    scored += 3
    scoreAssignment(elem)
    
}

function addTwo(elem){
    scored += 2
    scoreAssignment(elem)
}

function addOne(elem){
    scored += 1
    scoreAssignment(elem)
}

function clearScore(){
    guestEl.innerText = 0
    homeEl.innerText = 0
    
}
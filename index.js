var rock = document.querySelector("#rock").addEventListener('click',game)
var paper = document.querySelector("#paper").addEventListener('click',game)
var scissors = document.querySelector("#scissors").addEventListener('click',game)

function computerPlay() {
    let choices=['rock','paper','scissors']
    return choices[Math.floor(Math.random() * choices.length)]
    
}
function playRound(playerSelection,computerSelection) {
    let computerSelection = computerPlay()
    let result = ''
    if(playerSelection=='rock' && computerSelection=='rock'){
        
    }
}
function game(){

}
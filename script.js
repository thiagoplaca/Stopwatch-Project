window.addEventListener('load', stopTimer)

let seconds = 00
let mseconds = 00
let minutes = 00
let interval;

const getMinutes = document.getElementById('minutes')
const getSeconds = document.getElementById('seconds')
const getmSeconds = document.getElementById('m-seconds')
const buttonStart = document.getElementById('button-start')
const buttonStop = document.getElementById('button-stop')
const buttonReset = document.getElementById('button-reset')

buttonStart.addEventListener('click', start)
buttonStop.addEventListener('click', stopTimer)
buttonReset.addEventListener('click', resetTimer)

start();

function start() {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
}

function stopTimer() {
    clearInterval(interval)
}

function resetTimer () {
    clearInterval(interval)
    seconds = '00'
    mseconds = '00'
    minutes = '00'
    getSeconds.innerHTML = seconds
    getmSeconds.innerHTML = mseconds
    getMinutes.innerHTML = minutes

}

function startTimer() {
   mseconds++

   if(mseconds <= 9){
    getmSeconds.innerHTML = '0' + mseconds
   }

   if(mseconds > 9) {
    getmSeconds.innerHTML = mseconds
   }

   if(mseconds > 99) {
    seconds++
    getSeconds.innerHTML = '0' + seconds
    mseconds = 0
    getmSeconds.innerHTML = '0' + 0
   }

   if(seconds > 9) {
    getSeconds.innerHTML = seconds

}

    if(seconds > 60){
    minutes++
    getMinutes.innerHTML = '0' + minutes
    seconds = 0
    getSeconds.innerHTML = '0' + 0
    }
}

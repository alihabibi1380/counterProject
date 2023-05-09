let startBox = document.querySelector(".start-box")
let inputCounter = startBox.querySelector("#input-counter");
let startCounter = startBox.querySelector("#start-counter");
let erorMessage = document.querySelector("#eror");
let timer = document.querySelector(".c100");
let loadingText = document.querySelector(".loading");
let successText = document.querySelector(".success");
let timerNum = timer.querySelector("#timer-num");

startCounter.addEventListener("click", function() {
    let seconds = parseInt(inputCounter.value);

    if (isNaN(seconds)){
        erorMessage.textContent= "زمان را به درستی وارد کنید"
        erorMessage.classList.add("active");
        return;
    }

    erorMessage.classList.remove("active");
    startBox.style.display= "none";
    timer.style.display= "block";
    loadingText.style.display= "block";
    timerNum.textContent = seconds;
    successText.style.display= "none";

    let timerId = setInterval(() => {
        if (seconds <= 0){
            clearInterval(timerId)
            startBox.style.display= "block";
            timer.style.display= "none";
            loadingText.style.display= "none";
            successText.style.display= "block";
            inputCounter.value= '';
        }
        seconds -= 1;
        timerNum.textContent = seconds;
    }, 1000);

});
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

    let originalSeconds = seconds;
    let lastPercent = 'p100';
    let timerId = setInterval(() => {
        if (seconds <= 0){
            clearInterval(timerId)
            startBox.style.display= "block";
            timer.style.display= "none";
            loadingText.style.display= "none";
            successText.style.display= "block";
            inputCounter.value= '';
            timer.classList.remove(lastPercent)
            return;
        }
        if (lastPercent) timer.classList.remove(lastPercent);
        seconds -= 1;
        let percent = Math.abs(Math.floor((((originalSeconds - seconds) / originalSeconds) * 100) - 100))
        lastPercent = `p${percent}`;
        timer.classList.add(lastPercent)
        console.log(percent)
        timerNum.textContent = seconds;
    }, 1000);

});
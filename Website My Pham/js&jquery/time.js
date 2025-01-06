const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");
const targetTime = new Date();
targetTime.setHours(targetTime.getHours() + 2);

function updateTime(){
    const curretTime = new Date();
    const timeDifferent = targetTime - curretTime;

    const hours = Math.floor(timeDifferent / (1000 * 60 * 60));
    const minutes = Math.floor(timeDifferent % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(timeDifferent % (1000 * 60) / 1000);

    hour.textContent = hours.toString().padStart(2,"0");
    minute.textContent = minutes.toString().padStart(2,"0");
    second.textContent = seconds.toString().padStart(2,"0");
}

updateTime()

setInterval(updateTime, 1000)

let copybtn = document.querySelector(".copybtn");
let copybtna = document.querySelector(".copybtna");
let copybtnb = document.querySelector(".copybtnb");
let copybtnc = document.querySelector(".copybtnc");

$(function(){
    $('.carousel-inner div a img').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });    
})
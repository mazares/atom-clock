`use strict`;

const container = document.querySelector(".container");

const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const hoursBox = document.querySelector(".hours-box");
const minutesBox = document.querySelector(".minutes-box");
const secondsBox = document.querySelector(".seconds-box");
const date = document.querySelector(".date");

const clock = () => {
    const now = new Date();

    const allignment = 90;

    const hour = now.getHours() % 12 || 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();

    hoursBox.textContent = hour.toString().padStart(2, "0");
    minutesBox.textContent = minute.toString().padStart(2, "0");
    secondsBox.textContent = second.toString().padStart(2, "0");

    hours.style.transform = `rotate(${hour * 30 + allignment}deg)`;
    minutes.style.transform = `rotate(${minute * 6 + allignment}deg)`;
    seconds.style.transform = `rotate(${second * 6 + allignment}deg)`;

    hoursBox.style.transform = `rotate(-${hour * 30 + allignment}deg)`;
    minutesBox.style.transform = `rotate(-${minute * 6 + allignment}deg)`;
    secondsBox.style.transform = `rotate(-${second * 6 + allignment}deg)`;

    date.textContent = now.toDateString();
};

setInterval(clock, 1000);
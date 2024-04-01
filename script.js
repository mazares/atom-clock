"use strict";

const container = document.querySelector(".container");

const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const hoursBox = document.querySelector(".hours-box");
const minutesBox = document.querySelector(".minutes-box");
const secondsBox = document.querySelector(".seconds-box");
const date = document.querySelector(".date");

const allignment = 90;

const updateClockElement = (element, box, value, multiplier) => {
  box.textContent = value.toString().padStart(2, "0");
  element.style.transform = `rotate(${value * multiplier + allignment}deg)`;
  box.style.transform = `rotate(-${value * multiplier + allignment}deg)`;
  box.style.boxShadow = `0px 0px 15px hsl(${value * multiplier}, 100%, 50%)`;
  box.style.background = `radial-gradient(circle at 60% 60%, #111, hsl(${
    value * multiplier
  }, 100%, 50%))`;
  element.style.boxShadow = `inset 5px 0px 5px hsl(${
    value * multiplier
  }, 100%, 50%)`;
};

const clock = () => {
  const now = new Date();

  const hour = now.getHours() % 12 || 12;
  const minute = now.getMinutes();
  const second = now.getSeconds();

  updateClockElement(hours, hoursBox, hour, 30);
  updateClockElement(minutes, minutesBox, minute, 6);
  updateClockElement(seconds, secondsBox, second, 6);

  date.textContent = now.toDateString();

  date.style.background = `linear-gradient(90deg, hsl(${
    hour * 30
  }, 100%, 50%), hsl(${second * 6}, 100%, 50%), hsl(${minute * 6}, 100%, 50%))`;

  date.style.backgroundClip = "text";
  date.style.webkitBackgroundClip = "text";
  date.style.color = "transparent";
};

setInterval(clock, 1000);

const currentDate = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Elements
const currentTimeElem = document.getElementById("currentTime");
const currentDayElem = document.getElementById("currentDay");

// Update time values
currentTimeElem.textContent = currentDate.toUTCString();
currentDayElem.textContent = days[currentDate.getDay()];

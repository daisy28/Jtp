"use strict";
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
];
const giveawayInfo = document.querySelector(".giveaway_info_text h4");
const countdown = document.querySelectorAll(".countdown p");
const expiryInfo = document.querySelector(".giveaway_container p");
const futureDate = new Date(2023, 10, 23, 12, 30, 0, 0);
giveawayInfo.innerHTML = `giveaway ends on ${weekdays[futureDate.getDay()]}, ${futureDate.getDate()} ${months[futureDate.getMonth()]} ${futureDate.getFullYear()} ${futureDate.getHours()}:${futureDate.getMinutes()} <span>pm</span>`;
const countDown = () => {
    const currentDate = new Date();
    const timeDifference = futureDate.getTime() - currentDate.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const oneHour = 1000 * 60 * 60;
    const oneMin = 1000 * 60;
    const days = Math.floor(timeDifference / oneDay);
    const hours = Math.floor((timeDifference % oneDay) / oneHour);
    const minutes = Math.floor((timeDifference % oneHour) / oneMin);
    let seconds = Math.floor((timeDifference % oneMin) / 1000);
    const timeFormat = (item) => {
        if (typeof item === "number" && item < 10) {
            item = `0` + item;
        }
        return item;
    };
    const values = [days, hours, minutes, seconds];
    countdown.forEach((item, index) => {
        item.innerHTML = `${timeFormat(values[index])}`;
    });
    if (timeDifference < 0) {
        clearInterval(tick);
        expiryInfo.innerHTML += `Oooops! Giveaway time has elapsed.`;
        countdown.forEach((item) => {
            item.innerHTML = `00`;
        });
    }
};
let tick = setInterval(countDown, 1000);
countDown();

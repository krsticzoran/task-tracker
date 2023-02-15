import { displayClock } from "./userInterface.js";

//-----  THE CURRENT DATE ----

const locale = navigator.language;
let currentDate = new Date();
const options = {
  day: "numeric",
  month: "long",
  year: "numeric",
};

currentDate = currentDate.toLocaleDateString(locale, options);

// ----- CLOCK -----

const clock = () => {
  const currentTime = new Date();
  let hour =
    currentTime.getHours() < 10
      ? "0" + currentTime.getHours()
      : currentTime.getHours();
  let minutes =
    currentTime.getMinutes() < 10
      ? "0" + currentTime.getMinutes()
      : currentTime.getMinutes();
  let seconds =
    currentTime.getSeconds() < 10
      ? "0" + currentTime.getSeconds()
      : currentTime.getSeconds();

  displayClock.innerHTML = ` <p>${hour}:${minutes}:${seconds}</p>`;
  setTimeout(clock, 1000);
};

export { currentDate, clock };

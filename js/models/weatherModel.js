export let city;
export let dataWeather;

// City & WEATHER FETCH

export const cityFetch = async function (lat, lng) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
  );

  const data = await res.json();

  city = data.city;
  console.log(data);
  if (!city) {
    city = "Belgrade";
  }
  const rep = await fetch(`https://goweather.herokuapp.com/weather/${city}`);

  dataWeather = await rep.json();

  console.log(dataWeather);
};

// DATE

const locale = navigator.language;
export let currentDate = new Date();
const options = {
  day: "numeric",
  month: "long",
  year: "numeric",
};

currentDate = currentDate.toLocaleDateString(locale, options);

//  TIME
const displayClock = document.querySelector(".clock");

export const clock = () => {
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

/////

//TODAY

export let today = new Date()
  .toLocaleString()
  .slice(0, 10)
  .split("/")
  .reverse()
  .join("-");

// TASK TIME

export const taskTime = function (time) {
  const str = new Date(time);
  const timestamp = str.getTime();
  return timestamp;
};

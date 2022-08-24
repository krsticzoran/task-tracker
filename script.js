/////////////////////////////////////////////////////////////////////
// ----- MY FIRST APP -----

const btnAdd = document.querySelector(".btn--add");
const addInput = document.querySelector(".input--add");
const list = document.querySelector(".list");
const completed = document.querySelector(".completed--list");
const inputDate = document.querySelector(".date");
const displayclock = document.querySelector(".clock");
const characterCounter = document.querySelector(".characterCounter");
const dayInWeek = document.querySelector("#taskDay");

let input = [],
  inputOne = [],
  dayOfWeek = [];
//localStorage.clear();
///////
//var value = e.value;
/////////////////////////////////////////////////////////////////////
// ----- DATE ----

const locale = navigator.language;
let currentDate = new Date();
const options = {
  day: "numeric",
  month: "long",
  year: "numeric",
};
/*const taskOptions = {
  day: "numeric",
  month: "long",
};
const taskDate = currentDate.toLocaleDateString(locale, taskOptions);*/

const displayDate = currentDate.toLocaleDateString(locale, options);
inputDate.innerHTML = `<p>${displayDate}</p>`;

/////////////////////////////////////////////////////////////////////
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

  displayclock.innerHTML = ` <p>${hour}:${minutes}:${seconds}</p>`;
  setTimeout(clock, 1000);
};

clock();

///////////////////////////////////////////////////////////////////
addInput.addEventListener("input", updateValue);

function updateValue() {
  let x = this.value.length;
  if (x === 20) characterCounter.classList.add("zeroCharacterLeft");
  if (x < 20) characterCounter.classList.remove("zeroCharacterLeft");
  if (x == 0) {
    characterCounter.textContent = "20/20";
  } else {
    characterCounter.textContent = `${20 - x}/20`;
  }
}
/////////////////////////////////////////////////////////////////////
// TASK TIMER in progress
/*let time;
let taskDate = new Date();
const vreme = function () {
  time = Math.trunc((today.getTime() - taskDate.getTime()) / (1000 * 24));

  const timeInProgress = () => {
    time += 1;
    console.log(time);
  };

  setInterval(timeInProgress, 60000);
};
vreme();*/

////////////////////////////////////////////////////////////////////////
//---- LOCALSTORAGE --

//localStorage.clear();

input = JSON.parse(localStorage.getItem("todo"));

/*dayOfWeek = JSON.parse(localStorage.getItem("todoDay"));

// if task add before more then 7 days we delete it because this is planner for 7 days
for (i = 0; i < dayOfWeek.length; i++) {
  let x = (currentDate.getTime() - dayOfWeek[i][1]) / (3600000 * 24);
  console.log(x);
  if (x >= 7) {
    console.log(i);
    input.splice(i, 1);
    dayOfWeek.splice(i, 1);
    localStorage.setItem("todoDay", JSON.stringify(dayOfWeek));

    localStorage.setItem("todo", JSON.stringify(input));
    i--;
  }
}*/
if (JSON.parse(localStorage.getItem("todo"))) {
  for (i = 0; i < input.length; i++) {
    list.innerHTML += `<li class="list--li"><input type="checkbox" class="check" /><span><span class="span--to-do">${input[i]}</span
    ><button class="btn--confirm">Confirm</button></li>`;
  }
}

if (JSON.parse(localStorage.getItem("todo1"))) {
  inputOne = JSON.parse(localStorage.getItem("todo1"));
  for (i = 0; i < inputOne.length; i++) {
    completed.innerHTML += `<li class='completed--li'><span class="span--completed">${inputOne[i]}</span><button class='delete'>Delete</button></li>`;
  }
}

/////////////////////////////////////////////////////////////////////
// ----- ADD TASKS -----

const add = function () {
  if (addInput.value.length == 0) {
    alert("Please input a task");
  } else {
    list.innerHTML += `<li class="list--li"><input type="checkbox" class="check" /><span class="span--to-do">${addInput.value}</span
    ><button class="btn--confirm">Confirm</button></li>`;

    let taskDate = new Date();
    input.push(addInput.value);
    // dayOfWeek.push([dayInWeek.value, taskDate.getTime()]);

    localStorage.setItem("todo", JSON.stringify(input));
    //localStorage.setItem("todoDay", JSON.stringify(dayOfWeek));

    addInput.value = "";
    //dayInWeek.value = "Monday";
    characterCounter.textContent = "20/20";
    characterCounter.classList.remove("zeroCharacterLeft");
  }
};

btnAdd.addEventListener("click", add);

addInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    add();
  }
});

////////////////////////////////////////////////////////////////////////////
// ----- CONFIRM / TO DO LIST -----

list.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("btn--confirm") &&
    e.target.parentElement.firstElementChild.checked
  ) {
    const index = input.indexOf(e.target.previousElementSibling.textContent);

    if (index !== -1) {
      input.splice(index, 1);
      dayOfWeek.splice(index, 1);
    }
    localStorage.setItem("todoDay", JSON.stringify(dayOfWeek));

    localStorage.setItem("todo", JSON.stringify(input));

    inputOne.push(e.target.previousElementSibling.textContent);

    localStorage.setItem("todo1", JSON.stringify(inputOne));

    completed.innerHTML += `<li class='completed--li'><span class="span--completed">${e.target.previousElementSibling.textContent}</span><button class='delete'>Delete</button></li>`;

    e.target.parentElement.remove();
  }
});

// CHECKBOX

list.addEventListener("click", function (e) {
  if (e.target.classList.contains("span--to-do")) {
    if (e.target.previousElementSibling.checked == true) {
      e.target.previousElementSibling.checked = false;
    } else {
      e.target.previousElementSibling.checked = true;
    }
  }
});

//////////////////////////////////////////////////////////////////////////////
// ----- DELETE -----

completed.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();

    const index = inputOne.indexOf(e.target.previousElementSibling.textContent);

    if (index !== -1) {
      inputOne.splice(index, 1);
    }

    localStorage.setItem("todo1", JSON.stringify(inputOne));
  }
});
//localStorage.clear();

/////////////////////////////////////////////////////////////////////////////////////
// GEOLOCATION
/*
const displayCountry = document.querySelector(".geolocation");
const renderCountry = function (flag, name, population) {
  console.log(flag, name, population);
  const html = `
  <img  src="${flag}" />
  <p>${name}</p>
   <p>${population}M</p>`;
  displayCountry.insertAdjacentHTML("beforebegin", html);
};
//  GET NAME OF COUNTRY / GET INFORMATION ABOUT COUNTRY
const country = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      if (!response.ok) throw new Error(`Country not found ${response.status}`);
      return response.json();
    })
    .then((data) => {
      const nameCountry = data.country.toLowerCase();
      // calling covid function
      covid(nameCountry);
      return fetch(`https://restcountries.com/v3.1/name/${nameCountry}`);
    })
    .then((rep) => rep.json())
    .then((data) => {
      renderCountry(
        data[0].flags.png,
        data[0].name.common,
        (+data[0].population / 1000000).toFixed(1)
      );
    });
};

// GET POSITION LAT & LNG
navigator.geolocation.getCurrentPosition(
  function (position) {
    const { latitude: lat, longitude: lng } = position.coords;
    console.log(`https://www.google.com/maps/@${lat},${lng}`);
    country(lat, lng);
  },
  function () {
    alert("Could not get your position");
  }
);

//////////////////////////////////\

const covid = function (country) {
  fetch("https://api.covid19api.com/summary")
    .then((response) => response.json())
    .then((data) => {
      for (i = 0; i < data.Countries.length; i++) {
        if (Object.values(data.Countries[i]).includes(country)) {
          console.log(
            data,
            data.Countries[i].Country,
            data.Countries[i].TotalConfirmed,
            data.Countries[i].TotalDeaths,
            data.Countries[i].Slug
          );
          renderCovid(
            (+data.Countries[i].TotalConfirmed / 1000000).toFixed(1),
            data.Countries[i].TotalDeaths
          );
        }
      }
    });
};

const renderCovid = function (confirmed, deaths) {
  const html = `
  <p>Covid</p>
  <p>Confirmed: ${confirmed} M</p>
   <p>Deaths: ${deaths}</p>`;
  displayCountry.insertAdjacentHTML("afterend", html);
};
*/

/////////////////////////////////////////////////////////////////////
// ----- MY FIRST APP -----

import { renderCity } from "./views/cityView.js";
import { renderWeather } from "./views/weatherView.js";

import * as models from "./models/weatherModel.js";

const btnAdd = document.querySelector(".btn--add");
const addInput = document.querySelector(".input--add");
const inputDate = document.querySelector(".input--date");
const list = document.querySelector(".list");
const completed = document.querySelector(".completed--list");
const displayDate = document.querySelector(".date");
const displayClock = document.querySelector(".clock");
const characterCounter = document.querySelector(".characterCounter");

const page = document.querySelector(".page");
let pageNumber = 0;
const pageLoadTask = function () {
  list.innerHTML = "";
  for (let i = pageNumber * 10; i <= pageNumber * 10 + 9; i++) {
    if (input[i] !== undefined)
      list.innerHTML += `<li class="list--li"><input type="checkbox" class="check" /><span class="span--to-do">${input[i][0]}</span
><span class='span--to-do-date'>${input[i][1]}</span><button class="btn--confirm">Confirm</button></li>`;
  }
};

const taskTime = function (time) {
  const str = new Date(time);
  const timestamp = str.getTime();
  return timestamp;
};
let today = new Date()
  .toLocaleString()
  .slice(0, 10)
  .split("/")
  .reverse()
  .join("-");

let input = [],
  inputOne = [],
  failed = [],
  temporary = [];

const viewPages = () => {
  document.querySelector(".today--task").style.display = "none";

  document.querySelector(".to--do").style.display = "none";
  document.querySelector(".completed").style.display = "none";
  document.querySelector(".tomorrow--task").style.display = "none";

  document.querySelector(".failed--task").style.display = "none";
  document.querySelector(".serach--task").style.display = "none";
  inputSearch.value = "";
  document.querySelector(".paganation").style.display = "none";
};

/////////////////////////////////////////////////////////////////////
// ----- DISPLAY THE CURRENT DATE ----

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

currentDate = currentDate.toLocaleDateString(locale, options);
displayDate.innerHTML = `<p>${currentDate}</p>`;

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

  displayClock.innerHTML = ` <p>${hour}:${minutes}:${seconds}</p>`;
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

////////////////////////////////////////////////////////////////////////
//---- LOCALSTORAGE --

//localStorage.clear();
const allView = function () {
  if (JSON.parse(localStorage.getItem("todo"))) {
    input = JSON.parse(localStorage.getItem("todo"));

    for (let i = 0; i < input.length; i++) {
      if (today !== input[i][1] && Date.now() > taskTime(input[i][1])) {
        failed.push(input[i]);
        localStorage.setItem("todo2", JSON.stringify(failed));
        input.splice(i, 1);

        localStorage.setItem("todo", JSON.stringify(input));
        i--;
      }
    }
    //////////////////////////
    //

    page.textContent = `${pageNumber + 1} / ${Math.ceil(input.length / 10)}`;
    if (input.length === 0) {
      page.textContent = "";
    }

    pageLoadTask();
  }
};
allView();

const completedView = function () {
  if (JSON.parse(localStorage.getItem("todo1"))) {
    inputOne = JSON.parse(localStorage.getItem("todo1"));

    for (i = 0; i < inputOne.length; i++) {
      completed.innerHTML += `<li class='completed--li'><span class="span--completed">${inputOne[i][0]}</span><span class='date-for-delete span--to-do-date'>${inputOne[i][1]}</span><button class='delete'>Delete</button></li>`;
    }
  }
};

/////////////////////////////////////////////////////////////////////
// ----- ADD TASKS -----
let marker;
let storageInput = [];

const storage = function () {
  storageInput = [];
  for (i = 0; i < input.length; i++) {
    storageInput.push([input[i][0], input[i][1], input[i][2], input[i][3]]);
  }
};

const add = function () {
  if (mapEvent === undefined || mapEvent === "") {
    alert("add location");
  } else if (addInput.value.length == 0) {
    alert("input a task");
  } else if (
    inputDate.value == 0 ||
    (today !== inputDate.value && Date.now() > taskTime(inputDate.value))
  ) {
    alert("Please input a valid date");
  } else {
    list.innerHTML += `<li class="list--li"><input type="checkbox" class="check" /><span class="span--to-do">${addInput.value}</span
    ><span class='span--to-do-date'>${inputDate.value}</span><button class="btn--confirm">Confirm</button></li>`;
    console.log(mapEvent);
    const { lat } = mapEvent.latlng;
    const { lng } = mapEvent.latlng;

    marker = L.marker([lat, lng])
      .addTo(map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: "",
          //class name odrediti da bi lakse stilizovali popup
          //mozda i menjali za failed i confirm
        })
      )
      .setPopupContent(addInput.value)
      .openPopup();

    map.flyTo([lat, lng], 14);
    input.push([addInput.value, inputDate.value, lat, lng, marker]);

    storage();
    localStorage.setItem("todo", JSON.stringify(storageInput));

    characterCounter.textContent = "20/20";
    characterCounter.classList.remove("zeroCharacterLeft");

    listToday.innerHTML = "";
    dayView(today, listToday);

    listTomorrow.innerHTML = "";
    dayView(tomorrow, listTomorrow);

    page.textContent = `${pageNumber + 1} / ${Math.ceil(input.length / 10)}`;
    pageLoadTask();

    window.scrollTo(0, 0);

    document.querySelector(".modal").classList.remove("modal--open");
    document.querySelector(".modal").classList.add("modal--close");

    inputDate.value = "";
    addInput.value = "";
    mapEvent = "";
  }
};

btnAdd.addEventListener("click", add);

addInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    add();
  }
});

////////////////////////////////////////////////////////////////////////////
//map center on click

const markerFly = function (e) {
  const element = [
    e.target.parentElement.querySelector(".span--to-do").textContent,
    e.target.parentElement.querySelector(".span--to-do").nextSibling
      .textContent,
  ];

  for (i = 0; i < input.length; i++) {
    if (input[i][0] === element[0] && input[i][1] === element[1]) {
      map.flyTo([input[i][2], input[i][3]], 14);
    }
  }
};
list.addEventListener("click", markerFly);
//////////////////////////////////
// ----- CONFIRM / TO DO LIST -----

const confirmToDo = function (e) {
  const element = [
    e.target.parentElement.querySelector(".span--to-do").textContent,
    e.target.previousElementSibling.textContent,
  ];

  if (
    e.target.classList.contains("btn--confirm") &&
    e.target.parentElement.firstElementChild.checked
  ) {
    for (i = 0; i < input.length; i++) {
      if (input[i][0] === element[0] && input[i][1] === element[1]) {
        marker = input[i][4];

        input.splice(i, 1);
      }
    }
    map.removeLayer(marker);
    inputOne.push(element);

    /*completed.innerHTML += `<li class='completed--li'><span class="span--completed">${
      e.target.parentElement.querySelector(".span--to-do").textContent
    }</span><span>${
      e.target.previousElementSibling.textContent
    }</span><button class='delete'>Delete</button></li>`;*/
    storage();
    e.target.parentElement.remove();
    localStorage.setItem("todo", JSON.stringify(storageInput));
    localStorage.setItem("todo1", JSON.stringify(inputOne));
    page.textContent = `${pageNumber + 1} / ${Math.ceil(input.length / 10)}`;
    pageLoadTask();
    if (input.length == 0) {
      page.textContent = "";
    }
  }
};
list.addEventListener("click", confirmToDo);

// CHECKBOX

const checkboxFunction = function (e) {
  if (
    e.target.classList.contains("span--to-do") ||
    e.target.previousElementSibling.classList.contains("span--to-do")
  ) {
    if (e.target.parentElement.firstElementChild.checked == true) {
      e.target.parentElement.firstElementChild.checked = false;
    } else {
      e.target.parentElement.firstElementChild.checked = true;
    }
  }
};

document
  .querySelector(".today--task")
  .addEventListener("click", checkboxFunction);
list.addEventListener("click", checkboxFunction);
document
  .querySelector(".tomorrow--task")
  .addEventListener("click", checkboxFunction);
document
  .querySelector(".serach--task")
  .addEventListener("click", checkboxFunction);
//////////////////////////////////////////////////////////////////////////////
// ----- DELETE -----

completed.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    const element = [
      e.target.parentElement.querySelector(".span--completed").textContent,
      e.target.parentElement.querySelector(".date-for-delete").textContent,
    ];

    for (i = 0; i < inputOne.length; i++) {
      if (inputOne[i][0] === element[0] && inputOne[i][1] === element[1]) {
        console.log(i);
        inputOne.splice(i, 1);
      }
    }
    e.target.parentElement.remove();
    localStorage.setItem("todo1", JSON.stringify(inputOne));
  }
});

//delete all completed
document
  .querySelector(".delete-all-completed")
  .addEventListener("click", function () {
    inputOne = [];
    console.log(inputOne);
    localStorage.setItem("todo1", JSON.stringify(inputOne));
    completed.innerHTML = "";
    //completedView();
  });
//delete all falied

document
  .querySelector(".delete-all-failed")
  .addEventListener("click", function () {
    failed = [];

    localStorage.setItem("todo2", JSON.stringify(failed));
    listFailed.innerHTML = "";
    console.log(failed);
  });
//localStorage.clear();
///////////////////////////////////////////////////////
// button completed
const btnCompleted = document.querySelector(".btn--completed");
////////////////////////

btnCompleted.addEventListener("click", function () {
  completed.innerHTML = "";
  completedView();

  viewPages();
  document.querySelector(".completed").style.display = "block";

  inputSearch.value = "";

  closeMenu();
});

// button all
const btnAll = document.querySelector(".btn--all");

btnAll.addEventListener("click", function () {
  list.innerHTML = "";

  for (i = 0; i < input.length; i++) {
    marker = input[i][4];

    map.removeLayer(marker);
  }

  allView();
  addMarker();
  closeMenu();

  viewPages();
  document.querySelector(".to--do").style.display = "block";
  document.querySelector(".paganation").style.display = "flex";

  inputSearch.value = "";
  inputDate.value = "";
  addInput.value = "";
});
// button today
const btnToday = document.querySelector(".btn--today");

/////
///////////////////
const listToday = document.querySelector(".today--list");

const dayView = function (day, list) {
  for (i = 0; i < input.length; i++) {
    if (day == input[i][1]) {
      list.innerHTML += `<li class="list--li"><input type="checkbox" class="check" /><span class="span--to-do">${input[i][0]}</span
    ><span class='span--to-do-date'>${input[i][1]}</span><button class="btn--confirm">Confirm</button></li>`;
    }
  }
};

btnToday.addEventListener("click", function () {
  listToday.innerHTML = "";
  dayView(today, listToday);
  closeMenu();

  viewPages();
  document.querySelector(".today--task").style.display = "block";

  inputSearch.value = "";
});
listToday.addEventListener("click", confirmToDo);
listToday.addEventListener("mouseover", markerFly);

/////////////////////////
//tomorrow
//const today = new Date()
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow = new Date(tomorrow)
  .toISOString()
  .slice(0, 10)
  .split("/")
  .reverse()
  .join("-");
console.log(tomorrow);

const btnTomorrow = document.querySelector(".btn--tomorrow");
const listTomorrow = document.querySelector(".tomorrow--list");

btnTomorrow.addEventListener("click", function () {
  listTomorrow.innerHTML = "";
  dayView(tomorrow, listTomorrow);
  closeMenu();

  viewPages();
  document.querySelector(".tomorrow--task").style.display = "block";
});
listTomorrow.addEventListener("click", confirmToDo);
listTomorrow.addEventListener("mouseover", markerFly);

/////////
//failed

const btnFailed = document.querySelector(".btn--failed");
const listFailed = document.querySelector(".failed--list");

const failedView = function () {
  for (i = 0; i < failed.length; i++) {
    listFailed.innerHTML += `<li class='completed--li'><span class="span--completed">${failed[i][0]}</span><span class='date-for-delete span--to-do-date'>${failed[i][1]}</span><button class='delete'>Delete</button></li>`;
  }
};

btnFailed.addEventListener("click", function () {
  if (JSON.parse(localStorage.getItem("todo2"))) {
    failed = JSON.parse(localStorage.getItem("todo2"));
  }
  listFailed.innerHTML = "";

  failedView();

  viewPages();

  inputSearch.value = "";

  document.querySelector(".failed--task").style.display = "block";
  closeMenu();
});

listFailed.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();

    const element = [
      e.target.parentElement.querySelector(".span--completed").textContent,
      e.target.parentElement.querySelector(".date-for-delete").textContent,
    ];

    for (i = 0; i < failed.length; i++) {
      if (failed[i][0] === element[0] && failed[i][1] === element[1]) {
        failed.splice(i, 1);
      }
    }
    localStorage.setItem("todo2", JSON.stringify(failed));
  }
});

/////////////////////////
//search
const btnSearch = document.querySelector(".btn--search");
const inputSearch = document.querySelector(".input--search");
const listSearch = document.querySelector(".search--list");

const searchView = function () {
  for (i = 0; i < temporary.length; i++) {
    listSearch.innerHTML += `<li class="list--li"><input type="checkbox" class="check" /><span class="span--to-do">${temporary[i][0]}</span
  ><span class='span--to-do-date'>${temporary[i][1]}</span><button class="btn--confirm">Confirm</button></li>`;
  }
};

const search = function () {
  listSearch.innerHTML = "";
  document.querySelector(".no--search").style.display = "none";

  temporary = [];

  if (inputSearch.value.length == 0) {
    alert("Please input a text");
  } else {
    for (i = 0; i < input.length; i++) {
      if (input[i][0].includes(inputSearch.value)) {
        temporary.push(input[i]);
      }
    }
    if (temporary.length == 0) {
      document.querySelector(".no--search").style.display = "block";
      console.log(temporary.length);
    }

    searchView();
    inputSearch.value = "";

    viewPages();

    document.querySelector(".serach--task").style.display = "block";
  }
};
listSearch.addEventListener("click", confirmToDo);
listSearch.addEventListener("mouseover", markerFly);

btnSearch.addEventListener("click", search);
inputSearch.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    search();
  }
});

//////////////////////////////////////////
//PAGANATION
const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");

btnLeft.addEventListener("click", function () {
  if (pageNumber > 0) {
    pageNumber--;
    window.scrollTo(0, 0);
    pageLoadTask();
    page.textContent = `${pageNumber + 1} / ${Math.ceil(input.length / 10)}`;
  }
});

btnRight.addEventListener("click", function () {
  if (pageNumber < Math.ceil(input.length / 10) - 1) {
    pageNumber++;
    page.textContent = `${pageNumber + 1} / ${Math.ceil(input.length / 10)}`;
    pageLoadTask();
    window.scrollTo(0, 0);
  }
});
///////////////////////////////////////////
//sort
const upSortValue = document.querySelector(".value--up");
const downSortValue = document.querySelector(".value--down");
let x = 1;
upSortValue.addEventListener("click", function () {
  for (i = 0; i < input.length; i++) {
    marker = input[i][4];

    map.removeLayer(marker);
  }

  if (x == 1) {
    input.sort();
    storage();
    list.innerHTML = "";

    listToday.innerHTML = "";

    localStorage.setItem("todo", JSON.stringify(storageInput));
    dayView(today, listToday);

    listTomorrow.innerHTML = "";
    dayView(tomorrow, listTomorrow);

    listSearch.innerHTML = "";
    temporary.sort();
    searchView();
    allView();

    inputOne.sort();
    localStorage.setItem("todo1", JSON.stringify(inputOne));

    completed.innerHTML = "";
    completedView();

    failed.sort();
    listFailed.innerHTML = "";
    localStorage.setItem("todo2", JSON.stringify(failed));
    x = 2;
  } else {
    input.reverse();

    storage();

    list.innerHTML = "";
    listToday.innerHTML = "";

    localStorage.setItem("todo", JSON.stringify(storageInput));

    dayView(today, listToday);
    console.log(input);

    listTomorrow.innerHTML = "";
    dayView(tomorrow, listTomorrow);
    allView();

    temporary.reverse();
    listSearch.innerHTML = "";
    searchView();

    inputOne.reverse();
    localStorage.setItem("todo1", JSON.stringify(inputOne));

    completed.innerHTML = "";
    completedView();

    failed.sort();
    listFailed.innerHTML = "";
    localStorage.setItem("todo2", JSON.stringify(failed));
    x = 1;
  }
  console.log(input);
  failedView();
  window.scrollTo(0, 0);
  addMarker();
  console.log(x);
});

document.querySelector(".close--modal").addEventListener("click", function (e) {
  document.querySelector(".modal").classList.remove("modal--open");
  document.querySelector(".modal").classList.add("modal--close");
});
////////////////////////////////////////////////
//API
// WEATHER & CITY

const currentPosition = async function (lat, lng) {
  await models.cityFetch(lat, lng);
  document.querySelector(".loader").style.display = "none";
  renderCity(models.city);
  renderWeather(
    models.dataWeather.temperature,
    models.dataWeather.wind,
    models.dataWeather.description
  );
};

//////////////////////////////////////////
//map
let map, mapEvent;

const addMarker = function () {
  for (let i = 0; i < input.length; i++) {
    let storageMarker = L.marker([input[i][2], input[i][3]])
      .addTo(map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: "",

          //class name odrediti da bi lakse stilizovali popup
          //mozda i menjali za failed i confirm
        })
      )
      .setPopupContent(input[i][0])
      .openPopup();

    input[i].push(storageMarker);
  }
};
console.log(mapEvent);
navigator.geolocation.getCurrentPosition(
  function (position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    // l. je internation -name space koji nam omogucava- global variable
    //razlicite metode .map . setwiew su metode  'map' je id diva gde ce ici mapa
    // moramo imati i u html div sa map
    // var menjamo u const
    //44.787197, 20.457273
    map = L.map("map").setView([latitude, longitude], 14);

    L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
      maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }).addTo(map);
    // L.tileLayer("https://{s}.tile.openstreetmap.fr/hot//{z}/{x}/{y}.png", {
    //   attribution:
    //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    // }).addTo(map);

    //marker();
    addMarker();

    currentPosition(latitude, longitude);

    map.flyTo([latitude, longitude], 14);

    //leaflet version of click event
    map.on("click", function (e) {
      mapEvent = e;
      console.log(mapEvent.latlng);
      document.querySelector(".modal").classList.add("modal--open");
      document.querySelector(".modal").classList.remove("modal--close");
      addInput.focus();
    });
  },
  function () {
    alert("nema lokacije");
    let latitude, longitude;
    if (input.length == 0) {
      latitude = 44.787197;
      longitude = 20.457273;
    } else {
      x = input.length - 1;
      latitude = input[x][2];
      longitude = input[x][3];
    }

    map = L.map("map").setView([latitude, longitude], 8);

    L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
      maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }).addTo(map);

    //marker();
    addMarker();

    currentPosition(latitude, longitude);

    //leaflet version of click event
    map.on("click", function (e) {
      mapEvent = e;
      console.log(mapEvent.latlng);
      document.querySelector(".modal").classList.add("modal--open");
      document.querySelector(".modal").classList.remove("modal--close");
      addInput.focus();
    });
  }
);

// loader dok ucitava
//hamburger menu

//hamburger
const menuLeft = document.getElementById("menu--center");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const menuOpen = document.querySelector(".buttons--all-open");

const closeMenu = function () {
  one.classList.toggle("bar-one");
  two.classList.toggle("bar-two");
  three.classList.toggle("bar-three");

  menuOpen.classList.toggle("buttons--all-open");
};

menuLeft.addEventListener("click", closeMenu);

//map cover hidden

document
  .querySelector(".map--cover-p")
  .addEventListener("mouseover", function () {
    document.querySelector(".map--cover-p").style.display = "none";
    document.querySelector(".map--cover").style.display = "none";
  });

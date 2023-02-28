/////////////////////////////////////////////////////////////////////
// ----- MY FIRST APP -----

import { renderCity } from "./views/cityView.js";
import { renderWeather } from "./views/weatherView.js";
import { viewPages, coverView, emptyView } from "./views/view.js";
import * as models from "./models/weatherModel.js";
import { updateValue, resetCharacter } from "./models/character.js";
import { closeMenu } from "./views/menu.js";
import { failedView, listFailed } from "./views/failedWiew.js";
import { searchView, listSearch } from "./views/searchView.js";
import { list, dayView, listToday, pageLoadTask } from "./views/todayView.js";
import { allView, page } from "./models/page.js";
import { completed, completedView } from "./views/completedView.js";
import { storage, storageInput } from "./models/storage.js";
import { markerFly, fly, setMarker, addMarker } from "./models/mapCenter.js";
import { deleteAll, delAllFail, delAllCompl } from "./models/deleteAll.js";
import { deleteCompleted } from "./models/delete.js";
import { elConfirm, inputOnePush, inputSplice } from "./models/confirmToDo.js";
import { sortReverse } from "./models/sort.js";

const btnAdd = document.querySelector(".btn--add");
const addInput = document.querySelector(".input--add");
const inputDate = document.querySelector(".input--date");
const displayDate = document.querySelector(".date");

let pageNumber = 0,
  failed = [],
  temporary = [],
  inputOne = [];

let input = JSON.parse(localStorage.getItem("todo")) || [];

const viewFunction = function (dom, className) {
  dom.innerHTML = "";

  viewPages();

  inputSearch.value = "";

  document.querySelector(className).style.display = "block";
  closeMenu();
};
/////////////////////////////////////////////////////////////////////
// ----- DISPLAY THE CURRENT DATE & CLOCK ----

displayDate.innerHTML = `<p>${models.currentDate}</p>`;

models.clock();

///////////////////////////////////////////////////////////////////
//CHARACTER COUNTER

addInput.addEventListener("input", updateValue);

////////////////////////////////////////////////////////////////////////
//---- START PAGE--

allView(input, pageNumber, pageLoadTask, models.today, models.taskTime);

/////////////////////////////////////////////////////////////////////
// ----- ADD TASKS -----
let marker;

const add = function () {
  if (mapEvent === undefined || mapEvent === "") {
    alert("add location");
  } else if (addInput.value.length == 0) {
    alert("input a task");
  } else if (
    inputDate.value == 0 ||
    (models.today !== inputDate.value &&
      Date.now() > models.taskTime(inputDate.value))
  ) {
    alert("Please input a valid date");
  } else {
    console.log(mapEvent);
    const { lat } = mapEvent.latlng;
    const { lng } = mapEvent.latlng;

    marker = setMarker(addInput.value, lat, lng, L, map);

    console.log(marker);
    map.flyTo([lat, lng], 14);

    input.push([addInput.value, inputDate.value, lat, lng, marker]);
    console.log(input);
    storage(input);
    console.log(storageInput);
    localStorage.setItem("todo", JSON.stringify(storageInput));

    resetCharacter();

    listToday.innerHTML = "";
    dayView(input, models.today, listToday);

    listTomorrow.innerHTML = "";
    dayView(input, models.tomorrow, listTomorrow);

    page.textContent = `${pageNumber + 1} / ${Math.ceil(input.length / 10)}`;
    pageLoadTask(input, pageNumber);

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

list.addEventListener("click", (e) => fly(markerFly(e, input), map));
//////////////////////////////////
// ----- CONFIRM / TO DO LIST -----

const confirmToDo = function (e) {
  const element = elConfirm(e);
  if (
    e.target.classList.contains("btn--confirm") &&
    e.target.parentElement.firstElementChild.checked
  ) {
    inputSplice(input, marker, map, element);
    storage(input);
    inputOnePush(inputOne, element, e, storageInput);

    pageLoadTask(input, pageNumber);
    input.length == 0
      ? (page.textContent = "")
      : (page.textContent = `${pageNumber + 1} / ${Math.ceil(
          input.length / 10
        )}`);
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
  deleteCompleted(e, inputOne, "todo1");
});

//delete all completed

delAllCompl.addEventListener("click", function () {
  deleteAll(inputOne, "todo1", completed);
});
//delete all falied

delAllFail.addEventListener("click", function () {
  deleteAll(failed, "todo2", listFailed);
});
//localStorage.clear();
///////////////////////////////////////////////////////
// button completed
const btnCompleted = document.querySelector(".btn--completed");
////////////////////////

btnCompleted.addEventListener("click", function () {
  inputOne = JSON.parse(localStorage.getItem("todo1")) || [];

  viewFunction(completed, ".completed");

  completedView(inputOne);
});

// button all
const btnAll = document.querySelector(".btn--all");

btnAll.addEventListener("click", function () {
  list.innerHTML = "";

  for (let i = 0; i < input.length; i++) {
    marker = input[i][4];

    map.removeLayer(marker);
  }

  allView(input, pageNumber, pageLoadTask, models.today, models.taskTime);
  addMarker(input, L, map);
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
// TODAY

btnToday.addEventListener("click", function () {
  viewFunction(listToday, ".today--task");

  dayView(input, models.today, listToday);
});

listToday.addEventListener("click", confirmToDo);
listToday.addEventListener("click", markerFly);

/////////////////////////
//tomorrow
//const today = new Date()

const btnTomorrow = document.querySelector(".btn--tomorrow");
const listTomorrow = document.querySelector(".tomorrow--list");

btnTomorrow.addEventListener("click", function () {
  viewFunction(listTomorrow, ".tomorrow--task");
  dayView(input, models.tomorrow, listTomorrow);
});
listTomorrow.addEventListener("click", confirmToDo);
listTomorrow.addEventListener("mouseover", markerFly);

/////////
//failed

const btnFailed = document.querySelector(".btn--failed");
btnFailed.addEventListener("click", function () {
  failed = JSON.parse(localStorage.getItem("todo2")) || [];

  viewFunction(listFailed, ".failed--task");
  failedView(failed);
});

listFailed.addEventListener("click", function (e) {
  deleteCompleted(e, failed, "todo2");
});

/////////////////////////
//search
const btnSearch = document.querySelector(".btn--search");
const inputSearch = document.querySelector(".input--search");

const search = function () {
  listSearch.innerHTML = "";
  document.querySelector(".no--search").style.display = "none";

  temporary = [];

  if (inputSearch.value.length == 0) {
    alert("Please input a text");
  } else {
    for (let i = 0; i < input.length; i++) {
      if (input[i][0].includes(inputSearch.value)) {
        temporary.push(input[i]);
      }
    }
    if (temporary.length == 0) {
      document.querySelector(".no--search").style.display = "block";
      console.log(temporary.length);
    }

    searchView(temporary);
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
    pageLoadTask(input, pageNumber);
    page.textContent = `${pageNumber + 1} / ${Math.ceil(input.length / 10)}`;
  }
});

btnRight.addEventListener("click", function () {
  if (pageNumber < Math.ceil(input.length / 10) - 1) {
    pageNumber++;
    page.textContent = `${pageNumber + 1} / ${Math.ceil(input.length / 10)}`;
    pageLoadTask(input, pageNumber);
    window.scrollTo(0, 0);
  }
});
///////////////////////////////////////////
//sort

const upSortValue = document.querySelector(".value--up");
const downSortValue = document.querySelector(".value--down");
let x = 1;
upSortValue.addEventListener("click", function () {
  let arr = [list, listToday, listTomorrow, listSearch, completed, listFailed];

  if (x == 1) {
    emptyView(...arr);
    sortReverse("sort", input, temporary, inputOne, failed);

    storage(input);

    localStorage.setItem("todo", JSON.stringify(storageInput));
    dayView(input, models.today, listToday);

    dayView(input, models.tomorrow, listTomorrow);

    searchView(temporary);
    allView(input, pageNumber, pageLoadTask, models.today, models.taskTime);

    localStorage.setItem("todo1", JSON.stringify(inputOne));

    completedView(inputOne);

    localStorage.setItem("todo2", JSON.stringify(failed));
    x = 2;
  } else {
    emptyView(...arr);
    sortReverse("reverse", input, temporary, inputOne, failed);

    storage(input);

    localStorage.setItem("todo", JSON.stringify(storageInput));

    dayView(input, models.today, listToday);

    dayView(input, models.tomorrow, listTomorrow);
    allView(input, pageNumber, pageLoadTask, models.today, models.taskTime);

    searchView(temporary);

    localStorage.setItem("todo1", JSON.stringify(inputOne));

    completedView(inputOne);

    localStorage.setItem("todo2", JSON.stringify(failed));
    x = 1;
  }

  failedView(failed);
  window.scrollTo(0, 0);
  //addMarker(input, L, map);
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

navigator.geolocation.getCurrentPosition(
  function (position) {
    let { latitude } = position.coords;
    let { longitude } = position.coords;

    map = L.map("map").setView([latitude, longitude], 14);

    L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
      maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }).addTo(map);

    addMarker(input, L, map);

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
    addMarker(input, L, map);

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

//hamburger
const menuLeft = document.getElementById("menu--center");

menuLeft.addEventListener("click", closeMenu);

//map cover hidden

document.querySelector(".map--cover-p").addEventListener("click", coverView);

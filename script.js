/////////////////////////////////////////////////////////////////////
// ----- MY FIRST APP -----

const btnAdd = document.querySelector(".btn--add");
const addInput = document.querySelector(".input--add");
const inputDate = document.querySelector(".input--date");
const list = document.querySelector(".list");
const completed = document.querySelector(".completed--list");
const displayDate = document.querySelector(".date");
const displayClock = document.querySelector(".clock");
const characterCounter = document.querySelector(".characterCounter");

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
  failed = [];

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

    for (i = 0; i < input.length; i++) {
      if (today !== input[i][1] && Date.now() > taskTime(input[i][1])) {
        failed.push(input[i]);
        localStorage.setItem("todo2", JSON.stringify(failed));
        input.splice(i, 1);
        localStorage.setItem("todo", JSON.stringify(input));

        i--;
      }
    }
    for (i = 0; i < input.length; i++) {
      list.innerHTML += `<li class="list--li"><input type="checkbox" class="check" /><span class="span--to-do">${input[i][0]}</span
    ><span>${input[i][1]}</span><button class="btn--confirm">Confirm</button></li>`;
    }
  }
};
allView();

const completedView = function () {
  if (JSON.parse(localStorage.getItem("todo1"))) {
    inputOne = JSON.parse(localStorage.getItem("todo1"));

    for (i = 0; i < inputOne.length; i++) {
      completed.innerHTML += `<li class='completed--li'><span class="span--completed">${inputOne[i][0]}</span>${inputOne[i][1]}</span><button class='delete'>Delete</button></li>`;
    }
  }
};

/////////////////////////////////////////////////////////////////////
// ----- ADD TASKS -----

const add = function () {
  if (
    addInput.value.length == 0 ||
    inputDate.value == 0 ||
    (today !== inputDate.value && Date.now() > taskTime(inputDate.value))
  ) {
    alert("Please input a task and valid date");
  } else {
    list.innerHTML += `<li class="list--li"><input type="checkbox" class="check" /><span class="span--to-do">${addInput.value}</span
    ><span>${inputDate.value}</span><button class="btn--confirm">Confirm</button></li>`;

    input.push([addInput.value, inputDate.value]);

    localStorage.setItem("todo", JSON.stringify(input));
    inputDate.value = "";
    addInput.value = "";
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
const confirmToDo = function (e) {
  if (
    e.target.classList.contains("btn--confirm") &&
    e.target.parentElement.firstElementChild.checked
  ) {
    const element = [
      e.target.parentElement.querySelector(".span--to-do").textContent,
      e.target.previousElementSibling.textContent,
    ];
    let index = -1;
    const indexFunction = function () {
      for (i = 0; i < input.length; i++) {
        if (input[i][0][1] == element[0][1]) {
          index = i;
        }
      }
    };
    indexFunction();

    if (index !== -1) {
      input.splice(index, 1);
    }

    inputOne.push([
      e.target.parentElement.querySelector(".span--to-do").textContent,
      e.target.previousElementSibling.textContent,
    ]);

    completed.innerHTML += `<li class='completed--li'><span class="span--completed">${
      e.target.parentElement.querySelector(".span--to-do").textContent
    }</span><span>${
      e.target.previousElementSibling.textContent
    }</span><button class='delete'>Delete</button></li>`;

    e.target.parentElement.remove();
    localStorage.setItem("todo", JSON.stringify(input));
    localStorage.setItem("todo1", JSON.stringify(inputOne));
  }
};
list.addEventListener("click", confirmToDo);

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

    const element = [
      e.target.parentElement.querySelector(".span--completed").textContent,
      e.target.previousElementSibling.textContent,
    ];
    let index = -1;
    const indexFunction = function () {
      for (i = 0; i < inputOne.length; i++) {
        if (inputOne[i][0][1] == element[0][1]) {
          index = i;
        }
      }
    };
    indexFunction();

    if (index !== -1) {
      inputOne.splice(index, 1);
    }
    console.log(index);
    localStorage.setItem("todo1", JSON.stringify(inputOne));
  }
});
//localStorage.clear();
///////////////////////////////////////////////////////
// button completed
const btnCompleted = document.querySelector(".btn--completed");
////////////////////////

btnCompleted.addEventListener("click", function () {
  completed.innerHTML = "";
  completedView();
  document.querySelector(".today--task").style.display = "none";
  document.querySelector(".add").style.display = "none";
  document.querySelector(".to--do").style.display = "none";
  document.querySelector(".completed").style.display = "block";
  document.querySelector(".tomorrow--task").style.display = "none";
  document.querySelector(".counterContainer").style.display = "none";
  document.querySelector(".failed--task").style.display = "none";
});

// button all
const btnAll = document.querySelector(".btn--all");

btnAll.addEventListener("click", function () {
  list.innerHTML = "";
  allView();
  document.querySelector(".add").style.display = "flex";
  document.querySelector(".to--do").style.display = "block";
  document.querySelector(".completed").style.display = "none";
  document.querySelector(".today--task").style.display = "none";
  document.querySelector(".tomorrow--task").style.display = "none";
  document.querySelector(".counterContainer").style.display = "block";
  document.querySelector(".failed--task").style.display = "none";
});
// button today
const btnToday = document.querySelector(".btn--today");

/////
///////////////////
const listToday = document.querySelector(".today--list");

btnToday.addEventListener("click", function () {
  listToday.innerHTML = "";
  for (i = 0; i < input.length; i++) {
    if (today == input[i][1]) {
      listToday.innerHTML += `<li class="list--li"><input type="checkbox" class="check" /><span class="span--to-do">${input[i][0]}</span
    ><span>${input[i][1]}</span><button class="btn--confirm">Confirm</button></li>`;
    }
  }
  document.querySelector(".add").style.display = "none";
  document.querySelector(".to--do").style.display = "none";
  document.querySelector(".today--task").style.display = "block";
  document.querySelector(".completed").style.display = "none";
  document.querySelector(".tomorrow--task").style.display = "none";
  document.querySelector(".counterContainer").style.display = "none";
  document.querySelector(".failed--task").style.display = "none";
});
listToday.addEventListener("click", confirmToDo);

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
  for (i = 0; i < input.length; i++) {
    if (tomorrow == input[i][1]) {
      listTomorrow.innerHTML += `<li class="list--li"><input type="checkbox" class="check" /><span class="span--to-do">${input[i][0]}</span
    ><span>${input[i][1]}</span><button class="btn--confirm">Confirm</button></li>`;
    }
  }
  document.querySelector(".add").style.display = "none";
  document.querySelector(".to--do").style.display = "none";
  document.querySelector(".today--task").style.display = "none";
  document.querySelector(".completed").style.display = "none";
  document.querySelector(".tomorrow--task").style.display = "block";
  document.querySelector(".counterContainer").style.display = "none";
  document.querySelector(".failed--task").style.display = "none";
});
listTomorrow.addEventListener("click", confirmToDo);

/////////
//failed

const btnFailed = document.querySelector(".btn--failed");
const listFailed = document.querySelector(".failed--list");

btnFailed.addEventListener("click", function () {
  if (JSON.parse(localStorage.getItem("todo2"))) {
    failed = JSON.parse(localStorage.getItem("todo2"));
  }
  listFailed.innerHTML = "";
  for (i = 0; i < failed.length; i++) {
    listFailed.innerHTML += `<li class='completed--li'><span class="span--completed">${failed[i][0]}</span><span>${failed[i][1]}</span><button class='delete'>Delete</button></li>`;
  }

  document.querySelector(".add").style.display = "none";
  document.querySelector(".to--do").style.display = "none";
  document.querySelector(".today--task").style.display = "none";
  document.querySelector(".completed").style.display = "none";
  document.querySelector(".tomorrow--task").style.display = "none";
  document.querySelector(".counterContainer").style.display = "none";
  document.querySelector(".failed--task").style.display = "block";
});

//listFailed.addEventListener("click", confirmToDo); ??
// faild odraditi delete i vratiti da ne moze da se unese prosli datum

//srediti js code jer se ponavlja na mnogo mesta
// search
// api poruku neku
//
//paganation
listFailed.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();

    const element = [
      e.target.parentElement.querySelector(".span--completed").textContent,
      e.target.previousElementSibling.textContent,
    ];
    console.log(element);
    let index = -1;
    const indexFunction = function () {
      for (i = 0; i < failed.length; i++) {
        if (failed[i][0][1] == element[0][1]) {
          index = i;
        }
      }
    };
    indexFunction();

    if (index !== -1) {
      failed.splice(index, 1);
    }
    console.log(index);
    localStorage.setItem("todo2", JSON.stringify(failed));
  }
});

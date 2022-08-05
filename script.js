/////////////////////////////////////////////////////////////////////
// ----- MY FIRST APP -----

const btnAdd = document.querySelector(".btn--add");
const addInput = document.querySelector(".input--add");
const list = document.querySelector(".list");
const completed = document.querySelector(".completed--list");
const inputDate = document.querySelector(".date");
let input = [],
  inputOne = [];

/////////////////////////////////////////////////////////////////////
// ----- DISPLAY THE CURRENT DATE ----

const locale = navigator.language;
let today = new Date();
const options = {
  day: "numeric",
  month: "long",
  year: "numeric",
};

const displayDate = today.toLocaleDateString(locale, options);
inputDate.innerHTML = `<p>${displayDate}</p>`;

/////////////////////////////////////////////////////////////////////
// TASK TIMER in progress

let taskDate = new Date(1659695780048);

const timeInProgress = (today, taskDate) => {
  let time = today.getTime() - taskDate.getTime();
  time = Math.trunc(time / (1000 * 24));
  return time;
};
console.log(today.getTime());
console.log(timeInProgress(today, taskDate));
////////////////////////////////////////////////////////////////////////
//---- LOCALSTORAGE --

//localStorage.clear();

if (JSON.parse(localStorage.getItem("todo"))) {
  input = JSON.parse(localStorage.getItem("todo"));

  for (i = 0; i < input.length; i++) {
    list.innerHTML += `<li class="list--li"><input type="checkbox" class="check" /><span class="span--to-do">${input[i]}</span
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

    input.push(addInput.value);

    localStorage.setItem("todo", JSON.stringify(input));

    addInput.value = "";
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
    }

    localStorage.setItem("todo", JSON.stringify(input));

    inputOne.push(e.target.previousElementSibling.textContent);

    localStorage.setItem("todo1", JSON.stringify(inputOne));

    completed.innerHTML += `<li class='completed--li'><span class="span--completed">${e.target.previousElementSibling.textContent}</span><button class='delete'>Delete</button></li>`;

    e.target.parentElement.remove();
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

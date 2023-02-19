const weatherPlacement = document.querySelector(".weather");

export const renderWeather = function (temperature, wind, weather) {
  if (temperature == "") {
    const html = `<p>:(</p>`;
    weatherPlacement.insertAdjacentHTML("beforeend", html);
  } else {
    let temrmometar;
    let temperatureNumber = temperature[1];
    let weatherPicture;
    if (weather == "Sunny") {
      weatherPicture = "<img  src='../scss/pictures/sun.png'>";
    }
    if (weather == "Clear") {
      weatherPicture = "<img  src='../scss/pictures/clear.png'>";
    }
    temperatureNumber >= 8
      ? (temrmometar = "<img  src='../scss/pictures/warm.png'>")
      : (temrmometar = "<img  src='../scss/pictures/cold.png'>");
    console.log(temperature);
    let windPicture = "<img  src='../scss/pictures/wind.png'>";

    const html = `
   
    
<div class='temp--container'>
  <p class='temp'>${temperature} ${temrmometar} </p>
  <div class="weather--icons">${weatherPicture}</div>
   <p class='wind'> ${wind}  ${windPicture}</p>
   

   </div>
   `;
    weatherPlacement.insertAdjacentHTML("beforeend", html);
  }
};

const weatherPlace = document.querySelector(".weather");

export const renderCity = function (city) {
  console.log(city);
  const html = `
  
  <p class='city'>${city}</p>
   `;

  weatherPlace.insertAdjacentHTML("afterbegin", html);
};

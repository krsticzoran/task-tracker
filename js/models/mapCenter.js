export const markerFly = function (e, input) {
  const element = [
    e.target.parentElement.querySelector(".span--to-do").textContent,
    e.target.parentElement.querySelector(".span--to-do").nextSibling
      .textContent,
  ];

  for (let i = 0; i < input.length; i++) {
    if (input[i][0] === element[0] && input[i][1] === element[1]) {
      console.log([input[i][2], input[i][3]], 14);
      return [input[i][2], input[i][3]];
    }
  }
};

export const fly = function (x, map) {
  map.flyTo(x, 14);
};

export const setMarker = function (value, lat, lng, l, map) {
  return L.marker([lat, lng])
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
    .setPopupContent(value)
    .openPopup();
};

export const addMarker = function (input, l, map) {
  for (let i = 0; i < input.length; i++) {
    let storageMarker = setMarker(
      input[i][0],
      input[i][2],
      input[i][3],
      L,
      map
    );

    input[i].push(storageMarker);
  }
};

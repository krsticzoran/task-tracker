export let city;
export let dataWeather;

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

export let today = new Date()
  .toLocaleString()
  .slice(0, 10)
  .split("/")
  .reverse()
  .join("-");

export const taskTime = function (time) {
  const str = new Date(time);
  const timestamp = str.getTime();
  return timestamp;
};

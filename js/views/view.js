export const viewPages = () => {
  document.querySelector(".today--task").style.display = "none";

  document.querySelector(".to--do").style.display = "none";
  document.querySelector(".completed").style.display = "none";
  document.querySelector(".tomorrow--task").style.display = "none";

  document.querySelector(".failed--task").style.display = "none";
  document.querySelector(".serach--task").style.display = "none";

  document.querySelector(".paganation").style.display = "none";
};

export const coverView = () => {
  document.querySelector(".map--cover-p").style.display = "none";
  document.querySelector(".map--cover").style.display = "none";
};

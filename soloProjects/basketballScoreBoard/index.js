let homeCount = 0;
let guestCount = 0;
let homeScore = document.getElementsByClassName("home-score")[0];
let guestScore = document.getElementsByClassName("guest-score")[0];
let homeBtnOne = document.getElementsByClassName("home-btn-1")[0];
let homeBtnTwo = document.getElementsByClassName("home-btn-2")[0];
let homeBtnThree = document.getElementsByClassName("home-btn-3")[0];
let guestBtnOne = document.getElementsByClassName("guest-btn-1")[0];
let guestBtnTwo = document.getElementsByClassName("guest-btn-2")[0];
let guestBtnThree = document.getElementsByClassName("guest-btn-3")[0];

homeBtnOne.addEventListener("click", () => handleBtnClick(1, "home"));
homeBtnTwo.addEventListener("click", () => handleBtnClick(2, "home"));
homeBtnThree.addEventListener("click", () => handleBtnClick(3, "home"));

guestBtnOne.addEventListener("click", () => handleBtnClick(1, "guest"));
guestBtnTwo.addEventListener("click", () => handleBtnClick(2, "guest"));
guestBtnThree.addEventListener("click", () => handleBtnClick(3, "guest"));

function handleBtnClick(value, type) {
  if (type === "home") {
    homeCount += value;
    homeScore.innerText = homeCount;
  } else {
    guestCount += value;
    guestScore.innerText = guestCount;
  }
}

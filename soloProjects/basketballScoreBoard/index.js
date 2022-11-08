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

homeBtnOne.addEventListener("click", function () {
  homeCount = homeCount + 1;
  homeScore.innerText = homeCount;
});

homeBtnTwo.addEventListener("click", function () {
  homeCount = homeCount + 2;
  homeScore.innerText = homeCount;
});
homeBtnThree.addEventListener("click", function () {
  homeCount = homeCount + 3;
  homeScore.innerText = homeCount;
});

guestBtnOne.addEventListener("click", function () {
  guestCount = guestCount + 1;
  guestScore.innerText = guestCount;
});

guestBtnTwo.addEventListener("click", function () {
  guestCount = guestCount + 2;
  guestScore.innerText = guestCount;
});

guestBtnThree.addEventListener("click", function () {
  guestCount = guestCount + 3;
  guestScore.innerText = guestCount;
});

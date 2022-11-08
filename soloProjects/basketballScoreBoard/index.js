let homeCount = 0;
let guestCount = 0;
let homeScore = document.getElementsByClassName("home-score")[0];
let guestScore = document.getElementsByClassName("guest-score")[0];

document.addEventListener("click", handleClick);

function handleClick(event) {
  const btnId = event.target.dataset.id;
  if (btnId === "home-btn-1") {
    handleIncrement(1, "home");
  } else if (btnId === "home-btn-2") {
    handleIncrement(2, "home");
  } else if (btnId === "home-btn-3") {
    handleIncrement(3, "home");
  } else if (btnId === "guest-btn-1") {
    handleIncrement(1, "guest");
  } else if (btnId === "guest-btn-2") {
    handleIncrement(2, "guest");
  } else if (btnId === "guest-btn-3") {
    handleIncrement(3, "guest");
  }
}

function handleIncrement(value, type) {
  if (type === "home") {
    homeCount += value;
    homeScore.innerText = homeCount;
  } else {
    guestCount += value;
    guestScore.innerText = guestCount;
  }
}

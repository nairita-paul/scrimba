const inputEl = document.getElementById("input-el");
const btnEl = document.getElementById("btn-el");
const olEl = document.getElementById("ol-el");
const leads = [];

btnEl.addEventListener("click", work);
inputEl.addEventListener("keydown", function rity(e) {
  if (e.key === "Enter") {
    work();
  }
});

function work() {
  leads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("leads", JSON.stringify(leads));
  let storage = JSON.parse(localStorage.getItem("leads"));
  console.log(storage);
  render();
}

function render() {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += ` 
    <li>
        <a href = "${leads[i]}" target= "_blank"> 
           ${leads[i]} 
        </a>
    </li> `;
  }
  olEl.innerHTML = listItems;
}

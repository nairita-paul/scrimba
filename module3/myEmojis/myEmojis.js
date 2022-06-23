const myEmojis = ["👨‍💻", "🙊", "🎬", "🎼", "🎧"];
const emojiContainer = document.getElementById("emoji-container");
const input = document.getElementById("input");
const unshiftBtn = document.getElementById("unshift-btn");
const pushBtn = document.getElementById("push-btn");
const popBtn = document.getElementById("pop-btn");
const shiftBtn = document.getElementById("shift-btn");

function renderEmojis() {
  emojiContainer.innerText = "";
  for (let i = 0; i < myEmojis.length; i++) {
    const emojis = document.createElement("span");
    emojis.textContent = myEmojis[i];
    emojiContainer.append(emojis);
    console.log(myEmojis[i]);
  }
}
renderEmojis();

pushBtn.addEventListener("click", function () {
  if (input.value) {
    myEmojis.push(input.value);
    input.value = "";
    renderEmojis();
  }
});
unshiftBtn.addEventListener("click", function () {
  if (input.value) {
    myEmojis.unshift(input.value);
    input.value = "";
    renderEmojis();
  }
});

popBtn.addEventListener("click", function () {
  myEmojis.pop();
  renderEmojis();
});

shiftBtn.addEventListener("click", function () {
  myEmojis.shift();
  renderEmojis();
});

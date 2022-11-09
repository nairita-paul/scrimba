const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

function render() {
  let html = `

  <header class="header-container">
      <div class="flex-author-info">
        <img class="insta-avatar" src="images/logo.png" />
        <img class="user-avatar" src="images/user-avatar1.jpg" />
      </div>
  </header> 
  `;
  posts.forEach(function (item) {
    const { name, username, location, avatar, post, comment, likes } = item;

    html += `

  <section>
    <div class="first-section flex-col">
      <img class="user-avatar" src="${avatar}" />
      <div>
        <p class="author-name">${name}</p>
        <p class="author-location">${location}</p>
      </div>
    </div>
    <img class="post-pic" src="${post}" />
    <div class="flex-icon">
      <img class="icon" src="images/icon-heart.png" />
      <img class="icon" src="images/icon-comment.png" />
      <img class="icon" src="images/icon-dm.png" />
    </div>
    <p class="likes">${likes}    likes</p>
    <div>
      <p class="post-desc">
        <strong> ${username}</strong> ${comment}
      </p>
    </div>
  </section>
        `;
  });
  document.body.innerHTML = html;
}
render();

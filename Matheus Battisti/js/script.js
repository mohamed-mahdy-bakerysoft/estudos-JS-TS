const loading = document.querySelector("#loading");
const container__posts = document.querySelector("#container__posts");

const container__post = document.querySelector("#container__post");
const post = document.querySelector("#post");
const container__comments = document.querySelector("#container__comments");

const url = "https://jsonplaceholder.typicode.com/posts/";
const urlSearhParams = new URLSearchParams(window.location.search);
const postId = urlSearhParams.get("id");

const form__comment = document.querySelector("#form__comment");
const email = document.querySelector("#email");
const comment = document.querySelector("#body");

async function getPosts() {
  const response = await fetch(url);

  const data = await response.json();

  loading.style.display = "none";

  data.map((post) => {
    const div = document.createElement("div");
    const title = document.createElement("h2");
    const bodyPost = document.createElement("p");
    const link = document.createElement("a");

    title.innerHTML = post.title;
    bodyPost.innerHTML = post.body;
    link.innerHTML = "Ler mais";
    link.setAttribute("href", `./post.html?id=${post.id}`);

    div.appendChild(title);
    div.appendChild(bodyPost);
    div.appendChild(link);

    container__posts.appendChild(div);
  });
}

async function getPostById(id) {
  const [postResponse, commentsResponse] = await Promise.all([
    fetch(`${url}/${id}`),
    fetch(`${url}/${id}/comments`),
  ]);

  const postData = await postResponse.json();

  const commentsData = await commentsResponse.json();

  loading.style.display = "none";
  container__post.style.display = "grid";

  const title = document.createElement("h2");
  const bodyPost = document.createElement("p");

  title.innerHTML = postData.title;
  bodyPost.innerHTML = postData.body;

  post.appendChild(title);
  post.appendChild(bodyPost);

  commentsData.map((comment) => {
    createComment(comment);
  });
}

async function postComment(commentData) {
  const response = await fetch(`${url}/${postId}/comments`, {
    method: "POST",
    body: commentData,
    headers: {
        "Content-type": "application/json",
    }
  })

  const data = await response.json();

  createComment(data);
}

function createComment(comment) {
  const div = document.createElement("div");
  const email = document.createElement("h3");
  const bodyComment = document.createElement("p");

  email.innerHTML = comment.email;
  bodyComment.innerHTML = comment.body;

  div.appendChild(email);
  div.appendChild(bodyComment);

  container__comments.appendChild(div);
}

if (!postId) {
  getPosts();
} else {
  getPostById(postId);

  form__comment.addEventListener("submit", (e) => {
    e.preventDefault();

    let commentData = {
      email: email.value,
      body: comment.value,
    };

    commentData = JSON.stringify(commentData);

    postComment(commentData);
  });
}

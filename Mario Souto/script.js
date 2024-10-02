const usuNome = "0Carvalh0";
const gitAPI = `https://api.github.com/users/${usuNome}`;
const img = document.querySelector(`#imagem`);

const myPromise = new Promise((response, reject) => {
  fetch(gitAPI)
    .then(response => response.json())
    .then((data) => {
      img.setAttribute("src", data.avatar_url);
    })
    .catch((error) => console.error("Erro ao buscar dados:", error));
});

// Criação de promessa
const myPromise = new Promise((resolve, reject) => {
  const nome = "João Victor"; // Requisição externa

  if (nome === "João Victor") {
    resolve("Usuário João encontrado!");
  } else {
    reject("Usuário João não encontrado!");
  }
});

myPromise.then((data) => {
  console.log(data);
});

// Encadeamento de then's
const myPromise2 = new Promise((resolve, reject) => {
  const nome = "João Victor"; // Requisição externa

  if (nome === "João Victor") {
    resolve("Usuário João encontrado!");
  } else {
    reject("Usuário João não encontrado!");
  }
});

myPromise2
  .then((data) => {
    return data.toUpperCase();
  })
  .then((stringModificada) => {
    console.log(stringModificada);
  });

// Retorno do catch

const myPromise3 = new Promise((resolve, reject) => {
  const nome = "Matheus"; // Requisição externa

  if (nome === "João Victor") {
    resolve("Usuário João encontrado!");
  } else {
    reject("Usuário João não encontrado!");
  }
});

myPromise3
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Aconteceu um erro: " + err);
  });

// Resolver várias promessas (all)

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 ok!");
  }, 4000);
});
const p2 = new Promise((resolve, reject) => {
  resolve("P2 ok!");
});
const p3 = new Promise((resolve, reject) => {
  resolve("P3 ok!");
});

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
  console.log(data);
});

console.log("DEPOIS DO ALL!");

// Vária promessas (com race / corrida)

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P4 ok!");
  }, 4000);
});
const p5 = new Promise((resolve, reject) => {
  resolve("P5 ok!");
});
const p6 = new Promise((resolve, reject) => {
  resolve("P6 ok!");
});

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
  console.log(data);
});

// Fetch request na API GitHub
// Fetch API = AJAX

const userName = "0Carvalh0";

fetch(`https://api.github.com/users/${userName}`, {
  method: "GET",
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
})
  .then((response) => {
    console.log(typeof response);
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(`O nome do usuário é: ${data.name}`);
  })
  .catch((err) => {
    console.log(`Houve algum erro: ${err}`);
  });
  
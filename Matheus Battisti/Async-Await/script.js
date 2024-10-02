function primeiraFuncao() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Estou esperando isso!");
      resolve();
    }, 1000);
  });
}

async function segundaFuncao() {
  console.log("Iniciando!");

  await primeiraFuncao();

  console.log("Terminando!");
}

segundaFuncao();
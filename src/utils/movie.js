//Gerar uma lista de filmes com tamanho dinamico que eu escolher.

export function getListMovies(size, movies) {
  let popularMovies = [];

  for (let i = 0, mySize = size; i < mySize; i++) {
    popularMovies.push(movies[i]);
  }

  return popularMovies;
}

//Gerar um numero aleatório com base no tamanho da lista de filmes que for passada

export function randomBanner(movies) {
  return Math.floor(Math.random() * movies.length);
}

import AsyncStorage from "@react-native-async-storage/async-storage";

/*Buscar filmes salvos*/
export async function getMoviesSave(key) {
  const myMovies = await AsyncStorage.getItem(key);

  let moviesSave = JSON.parse(myMovies) || [];

  return moviesSave;
}

/*Salvar um novo filme*/
export async function saveMovie(key, newMovie) {
  let moviesStored = await getMoviesSave(key);

  const hasMovie = moviesStored.some((item) => item.id === newMovie.id);

  if (hasMovie) {
    alert("Filme já está salvo na sua lista");
    return;
  }

  moviesStored.push(newMovie);

  await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
}

/*Deletar um filme*/
export async function deleteMovie(id) {
  let moviesStored = await getMoviesSave("@reactprime");

  let myMovies = moviesStored.filter((item) => {
    return item.id !== id;
  });

  await AsyncStorage.setItem("@reactprime", JSON.stringify(myMovies));

  return myMovies;
}

/*Filtrar um filme já salvo*/

export async function hasMovie(movie) {
  let moviesStored = await getMoviesSave("@reactprime");

  const hasMovie = moviesStored.find((item) => item.id === movie.id);

  if (hasMovie) {
    return true;
  }
  return false;
}

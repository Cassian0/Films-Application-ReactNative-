import React, { useEffect, useState } from "react";

import { useNavigation, useIsFocused } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { FavoriteItem } from "../../components/FavoriteItem";
import { deleteMovie, getMoviesSave } from "../../utils/storage";

import { Container, ListMovies } from "./styles";

export function Movies() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let isActive = true;

    async function getfavoriteMovies() {
      const result = await getMoviesSave("@reactprime");

      if (isActive) {
        setMovies(result);
      }
    }

    if (isActive) {
      getfavoriteMovies();
    }

    return () => {
      isActive = false;
    };
  }, [isFocused]);

  async function handleDelete(id) {
    const response = await deleteMovie(id);
    setMovies(response);
  }

  function navigateDetailPage(item) {
    navigation.navigate("Detail", { id: item.id });
  }

  return (
    <Container>
      <Header title="Meus Filmes" />

      <ListMovies
        data={movies}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <FavoriteItem
            data={item}
            deleteMovie={handleDelete}
            navigatePage={() => navigateDetailPage(item)}
          />
        )}
      />
    </Container>
  );
}

import React from "react";
import { ScrollView } from "react-native";

import { Feather } from "@expo/vector-icons";

import { Header } from "../../components/Header";

import {
  Container,
  SearchContainer,
  Input,
  SearchButton,
  Title,
} from "./styles";

export function Home() {
  return (
    <Container>
      <Header title="React Prime" />

      <SearchContainer>
        <Input placeholder="Pesquisar..." placeholderTextColor="#DDD" />

        <SearchButton>
          <Feather name="search" size={30} color="#FFF" />
        </SearchButton>
      </SearchContainer>

      <ScrollView>
        <Title>Em Cartaz</Title>
        <BannerButton>
            <Banner
                source={{uri: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'}}
            />
        </BannerButton>
      </ScrollView>
    </Container>
  );
}

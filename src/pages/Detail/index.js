import React from "react";
import {} from "react-native";

import { Feather, Ionicons } from "@expo/vector-icons";

import { Container, Header, HeaderButton } from "./styles";

export function Detail() {
  return (
    <Container>
      <Header>
        <HeaderButton>
          <Feather name="arrow-left" size={28} color="#FFF" />
        </HeaderButton>
        <HeaderButton>
          <Ionicons name="bookmark" size={28} color="#FFF" />
        </HeaderButton>
      </Header>
    </Container>
  );
}

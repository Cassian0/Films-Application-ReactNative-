import React from "react";
import {} from "react-native";

import { Container, Name } from "./styles";

export function GenresItem({ data }) {
  return (
    <Container>
      <Name>{data.name} </Name>
    </Container>
  );
}

import React from 'react';
import { Container, CardDiv, Title } from './styles';

import { Select } from '../Select';

export const Card = () => {
  return (
    <Container>
      <CardDiv>
        <Title>Muestreo</Title>
        <Select />
      </CardDiv>
    </Container>
  );
};

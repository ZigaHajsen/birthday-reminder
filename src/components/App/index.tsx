import React from 'react';
import { Main, Container, Title, Button } from './styles/AppStyle';
import { List } from '../';

const App: React.FC = () => {
  return (
    <Main>
      <Container>
        <Title>0 birthdays today</Title>
        <List />
        <Button onClick={() => console.log('you clicked me')}>clear all</Button>
      </Container>
    </Main>
  );
};

export default App;

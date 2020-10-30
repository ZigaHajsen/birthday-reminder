import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearAll } from '../../redux/actions';
import { Main, Container, Title, Button } from './styles/AppStyle';
import { List } from '../';

const App: React.FC = () => {
  const people = useSelector((state: any) => state.people);
  const dispatch = useDispatch();

  return (
    <Main>
      <Container>
        <Title>{people.length} birthdays today</Title>
        <List people={people} />
        <Button onClick={() => dispatch(clearAll())}>clear all</Button>
      </Container>
    </Main>
  );
};

export default App;

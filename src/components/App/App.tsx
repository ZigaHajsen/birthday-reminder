import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearAll } from '../../redux/actions';
import { Main, Container, Title, Button } from './styles/AppStyle';
import { ListModel } from '../../models/list.model';
import { List } from '..';

interface AppState {
  people: ListModel[];
}

const App: React.FC = () => {
  const people = useSelector((state: AppState) => state.people);
  const dispatch = useDispatch();

  return (
    <Main data-test='app-component'>
      <Container>
        <Title>{people.length} birthdays today</Title>
        <List people={people} />
        <Button onClick={() => dispatch(clearAll())}>clear all</Button>
      </Container>
    </Main>
  );
};

export default App;

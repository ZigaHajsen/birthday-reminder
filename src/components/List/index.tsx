import React from 'react';
import { Container, Article, Image, Name, Age } from './styles/ListStyle';

interface TodoProps {
  people: [];
}

const List: React.FC<TodoProps> = ({ people }) => {
  return (
    <Container>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <Article key={id}>
            <img src={image} alt={name} />
            <div>
              <Name>{name}</Name>
              <Age>{age} years</Age>
            </div>
          </Article>
        );
      })}
    </Container>
  );
};

export default List;

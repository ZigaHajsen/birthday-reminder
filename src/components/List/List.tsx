import React from 'react';
import { Container, Article, Image, Name, Age } from './styles/ListStyle';
import { ListModel } from '../../models/list.model';

interface ListProps {
  people: ListModel[];
}

const List: React.FC<ListProps> = ({ people }) => {
  return (
    <Container data-test='list-component'>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <Article key={id}>
            <Image src={image} alt={name} />
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

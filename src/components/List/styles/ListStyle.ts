import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Article = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 0.75rem;
  margin-bottom: 1.5rem;
  align-items: center;
`;

export const Image = styled.img`
  width: 75px;
  height: 75px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: var(--light-shadow);
`;

export const Name = styled.h4`
  margin-bottom: 0.35rem;
`;

export const Age = styled.p`
  margin-bottom: 0;
`;

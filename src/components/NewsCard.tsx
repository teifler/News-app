import React from 'react';
import styled from 'styled-components';
import { Article } from '../interfaces/everyting_interface';

//ADD ROOT OBJECTS TO FUNCTION
const NewsCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <Container>
      <ImageContainer>
        <img alt={article.title} src={article.urlToImage} width="100%" />
      </ImageContainer>
      <ArticleDescription>
        <Overlines>
          <p>Test</p>
          <p>Test</p>
        </Overlines>
      </ArticleDescription>
    </Container>
  );
};

export default NewsCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin-bottom: 1.5rem; ;
`;

const ImageContainer = styled.div``;

const ArticleDescription = styled.div`
  font-size: 0.8rem;
  padding: 1rem;
  letter-spacing: 1.5px;
  background-color: var(--bg-color-grey);
`;

const Overlines = styled.div`
  display: flex;
  justify-content: space-between;
  letter-spacing: 1.5px;
  font-size: 0.8rem;
  p {
    margin: 0px;
  }
`;

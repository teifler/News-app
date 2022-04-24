import React from 'react';
import styled from 'styled-components';
import { Article } from '../interfaces/everyting_interface';

//ADD ROOT OBJECTS TO FUNCTION
const NewsCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <Container>
      <ImageContainer>
        <img
          alt={article.title}
          src={article.urlToImage}
          width="100%"
          height="183px"
        />
      </ImageContainer>
      <ArticleDescription>
        <Overlines>
          <p>{article.author}</p>
          <p>{new Date(article.publishedAt).toLocaleDateString('de-DE')}</p>
        </Overlines>
        <Headline>
          <p>{article.title}</p>
        </Headline>
        <Underlines>
          <a href={article.url}>
            <p>Source: {article.source.name}</p>
          </a>
        </Underlines>
      </ArticleDescription>
    </Container>
  );
};

export default NewsCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin-bottom: 2rem;
  background-color: var(--bg-color-grey);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div``;

const ArticleDescription = styled.div`
  font-size: 0.8rem;
  padding: 0.5rem 1rem 1rem 1rem;
  letter-spacing: 1.5px;
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

const Headline = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: var(--font-color-black);
`;

const Underlines = styled.div`
  display: flex;
  justify-content: space-between;
  letter-spacing: 1.5px;
  font-size: 0.8rem;
  p {
    margin: 0px;
  }
`;

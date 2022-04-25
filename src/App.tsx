import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import {
  EverythingRootObject,
  Article,
} from './interfaces/everyting_interface';
import SearchInputForm from './components/SearchInputForm';
import NewsCard from './components/NewsCard';
import ArticleNumberDropdown from './components/ArticleNumberDropdown';
import loadingSpinner from './images/loadingSpinner.svg';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('Bitcoin');
  const [acticleNumbers, setActicleNumbers] = useState<string>('10');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [newsArticleList, setNewsArticleList] =
    useState<EverythingRootObject | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${acticleNumbers}&page=1&apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const data = await response.json();
        setNewsArticleList(data);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
      setLoading(false);
    };
    fetchNews();
  }, [searchQuery, acticleNumbers]);

  return (
    <div className="App">
      <Header>News App</Header>

      {error && (
        <ErrorMessage>
          Please reload the page there was an error while fetching the data
        </ErrorMessage>
      )}

      <SearchInputForm setSearchQuery={setSearchQuery} />
      <DropdownContainer>
        <ArticleNumberDropdown setActicleNumbers={setActicleNumbers} />
      </DropdownContainer>

      {loading && (
        <LoadingContainer>
          <img
            src={loadingSpinner}
            alt="loading..."
            height="80"
            width="80"
          ></img>
        </LoadingContainer>
      )}
      <ArticleList role="list">
        {newsArticleList?.articles?.map((article: Article) => (
          <ArticleListElement key={article.title}>
            <NewsCard article={article} />
          </ArticleListElement>
        ))}
      </ArticleList>
    </div>
  );
};

export default App;

const Header = styled.h1`
  text-align: center;
  background-color: #4d5061;
  border: 1px solid #3b3c47;
`;

const DropdownContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: center;
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ErrorMessage = styled.p`
  color: var(--font-color-red);
  text-align: center;
  margin-bottom: 1rem;
`;

const ArticleList = styled.div`
  margin-top: 2rem;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ArticleListElement = styled.div`
  display: flex;
  justify-content: center;
`;

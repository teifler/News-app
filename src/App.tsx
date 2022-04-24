import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import {
  EverythingRootObject,
  Article,
} from './interfaces/everyting_interface';
import SearchInputForm from './components/SearchInputForm';
import NewsCard from './components/NewsCard';

import loadingSpinner from './images/loadingSpinner.svg';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('Bitcoin');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [newsArticleList, setNewsArticleList] =
    useState<EverythingRootObject | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${process.env.REACT_APP_API_KEY}`
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
  }, [searchQuery]);

  console.log(newsArticleList);
  return (
    <div className="App">
      <Header>News App</Header>
      {error && (
        <h3>
          Please reload the page there was an error while fetching the data
        </h3>
      )}
      <SearchInputForm setSearchQuery={setSearchQuery} />
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

const LoadingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform: -webkit-translate(-50%, -50%);
  transform: -moz-translate(-50%, -50%);
  transform: -ms-translate(-50%, -50%);
`;

export default App;

const Header = styled.h1`
  text-align: center;
`;

const ArticleList = styled.div`
  margin-top: 3.5rem;
  list-style: none;
`;

const ArticleListElement = styled.div`
  display: flex;
  justify-content: center;
`;

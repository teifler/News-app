import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

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
  const [acticleNumbers, setActicleNumbers] = useState<number>(10);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [newsArticleList, setNewsArticleList] =
    useState<EverythingRootObject | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const pagesVisited = pageNumber * acticleNumbers;
  let pageCount = 1;
  /*
  How many pages do we have in total? Round up with ceil
  Usually we calculate that number of the total articles but we can only fetch 100 
  */
  if (newsArticleList) {
    pageCount = Math.ceil(100 / acticleNumbers);
  }

  const changePage = (selectedItem: { selected: number }): void => {
    setPageNumber(selectedItem.selected + 1);
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${acticleNumbers}&page=${pageNumber}&apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const data = await response.json();
        setNewsArticleList(data);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
      setLoading(false);
      window.scrollTo(0, 0);
    };
    fetchNews();
  }, [searchQuery, acticleNumbers, pageNumber]);

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
      {/* 
        You can find the classes in globalstyles -- Because it was not possible to style
        ReactPaginate with StyledComponents    
        */}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        pageRangeDisplayed={3}
        containerClassName={'paginationButtons'}
        previousLinkClassName={'previousButtons'}
        nextLinkClassName={'nextButton'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
    </div>
  );
};

export default App;

const Header = styled.h1`
  margin-top: 0px;
  text-align: center;
  background-color: var(--bg-color-dark-grey);
  border: 1px solid #3b3c47;
  margin-bottom: 20px;
`;

const DropdownContainer = styled.div`
  display: flex;
  margin-top: 16px;
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
  margin-bottom: 16px;
`;

const ArticleList = styled.div`
  margin-top: 32px;
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

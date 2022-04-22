import React from 'react';
import { useState, useEffect } from 'react';
import { EverythingRootObject } from './interfaces/everyting_interface';

const App: React.FC = () => {
  const API_KEY: string = '6e769055c0fa4086924abb5f8af1bc8a';
  const [searchQuery, setSearchQuery] = useState<String>('bitcoin');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [newsArticleList, setNewsArticleList] = useState<
    EverythingRootObject[]
  >([]);
  const url: string = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const { articles } = await response.json();
        setNewsArticleList(articles);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
      setLoading(false);
    };
    fetchNews();
  }, [url]);

  if (loading) {
  }

  return (
    <div className="App">
      <h1>News</h1>
      {error && <h3>Please reload the page there was an error</h3>}
    </div>
  );
};

export default App;

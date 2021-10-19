import React from 'react';
import ArticleList from './components/article-list/article-list';
import articles from './fixtures';
import './app.scss';

function App() {
  return (
    <>
      <h1 className="app__title">App Name</h1>
      <ArticleList className="app__article-list" articles={articles} />
    </>
  );
}

export default App;

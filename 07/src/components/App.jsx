import React from 'react';
import ArticleList from './ArticleList';
import articles from '../fixtures';

function App() {
  return (
    <>
      <h1>App Name</h1>
      <ArticleList articles={articles} flag />
    </>
  );
}

export default App;

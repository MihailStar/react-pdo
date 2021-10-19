import React from 'react';
import Article from './Article';
import articles from '../fixtures';

function App() {
  return (
    <>
      <h1>App Name</h1>
      <Article article={articles[0]} />
    </>
  );
}

export default App;

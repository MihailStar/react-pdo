import React from 'react';
import { render } from 'react-dom';

function Article() {
  const body = <p>Body</p>;

  return (
    <article className="article" style={{ 'font-family': 'sans-serif' }}>
      <header className="article__header">
        <h2 className="article__title">Title</h2>
      </header>
      <div className="article__body">{body}</div>
      <footer className="article__footer">
        Date Of Creation: {new Date().toLocaleDateString()}
      </footer>
    </article>
  );
}

function App() {
  return (
    <div>
      <h1>App Name</h1>
      <Article />
    </div>
  );
}

render(<App />, document.querySelector('#app'));

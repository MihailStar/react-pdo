import React, { Component } from 'react';
import ArticleList from './components/article-list/article-list';
import fixtures from './fixtures';
import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reverted: false,
    };
  }

  revert = () => {
    const { reverted } = this.state;

    this.setState({
      reverted: !reverted,
    });
  };

  render() {
    const { reverted } = this.state;
    const articles = reverted ? [...fixtures].reverse() : fixtures;

    return (
      <>
        <header className="app__header">
          <h1 className="app__title">App Name</h1>
          <button className="button" type="button" onClick={this.revert}>
            Revert
          </button>
        </header>
        <ArticleList className="app__article-list" articles={articles} />
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
    };
  }

  clickHandler = () => {
    const { isOpen } = this.state;

    this.setState({
      isOpen: !isOpen,
    });
  };

  render() {
    const { article } = this.props;
    const { isOpen } = this.state;
    const articleBody = isOpen && <p>{article.text}</p>;
    const articleDate = new Date(article.date);

    return (
      <article className="article" data-id={article.id}>
        <header className="article__header">
          <h2 className="article__title">{article.title}</h2>
          <button type="button" onClick={this.clickHandler}>
            {isOpen ? 'Close' : 'Open'}
          </button>
        </header>
        <div className="article__body">{articleBody}</div>
        <footer className="article__footer">
          <span>Date Of Creation: </span>
          <time
            className="article__time"
            title={articleDate.toLocaleString()}
            dateTime={articleDate.toISOString()}
          >
            {articleDate.toLocaleDateString()}
          </time>
        </footer>
      </article>
    );
  }
}

const currentDate = new Date();

Article.defaultProps = {
  article: {
    id: '',
    title: '',
    text: '',
    date: currentDate.toISOString(),
  },
};

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
  }),
};

export default Article;

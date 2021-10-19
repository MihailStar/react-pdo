import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './article.scss';

class Article extends PureComponent {
  render() {
    const { article, className, isOpen, onButtonClick } = this.props;
    const articleBody = isOpen && (
      <p className="article__text">{article.text}</p>
    );
    const articleDate = new Date(article.date);

    return (
      <article
        className={`article ${className}`.trimRight()}
        data-id={article.id}
      >
        <header className="article__header">
          <h2 className="article__title">{article.title}</h2>
          <button className="button" type="button" onClick={onButtonClick}>
            {isOpen ? 'Close' : 'Open'}
          </button>
        </header>
        <div className="article__body">{articleBody}</div>
        <footer className="article__footer">
          <span>Date Of Creation: </span>
          <time
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
    date: currentDate.toISOString(),
    id: '',
    text: '',
    title: '',
  },
  className: '',
  isOpen: false,
  onButtonClick: () => {},
};

Article.propTypes = {
  article: PropTypes.shape({
    date: PropTypes.string,
    id: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
  }),
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  onButtonClick: PropTypes.func,
};

export default Article;

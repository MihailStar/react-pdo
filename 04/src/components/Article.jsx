import React from 'react';
import PropTypes from 'prop-types';

function Article(props) {
  const {
    article: { id, title, text, date },
  } = props;
  const articleDate = new Date(date);

  return (
    <article className="article" data-id={id}>
      <header className="article__header">
        <h2 className="article__title">{title}</h2>
      </header>
      <div className="article__body">
        <p>{text}</p>
      </div>
      <footer className="article__footer">
        <span>Date Of Creation: </span>
        <time className="article__time" dateTime={articleDate.toISOString()}>
          {articleDate.toLocaleDateString()}
        </time>
      </footer>
    </article>
  );
}

const currentDate = new Date();

Article.defaultProps = {
  article: {
    id: currentDate.valueOf().toString(),
    title: 'No Title',
    text: 'No Text',
    date: currentDate.toISOString(),
    comments: [],
  },
};

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    comments: PropTypes.array,
  }),
};

export default Article;

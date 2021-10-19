import React from 'react';
import PropTypes from 'prop-types';
import Article from '../article/article';
import './article-list.scss';

function ArticleList(props) {
  const { className, articles } = props;
  const articleElements = articles.map((article) => (
    <li className="article-list__item" key={article.id}>
      <Article className="article-list__article" article={article} />
    </li>
  ));

  return (
    <ul className={`article-list ${className}`.trimRight()}>
      {articleElements}
    </ul>
  );
}

ArticleList.defaultProps = {
  className: '',
  articles: [],
};

ArticleList.propTypes = {
  className: PropTypes.string,
  articles: PropTypes.arrayOf(PropTypes.object),
};

export default ArticleList;

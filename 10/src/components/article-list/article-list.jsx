import React from 'react';
import PropTypes from 'prop-types';
import Article from '../article/article';
import './article-list.scss';

function ArticleList(props) {
  const { articles, className } = props;
  const articleElements = articles.map((article, index) => (
    <li className="article-list__item" key={article.id}>
      <Article
        className="article-list__article"
        article={article}
        defaultOpen={index === 0}
      />
    </li>
  ));

  return (
    <ul className={`article-list ${className}`.trimRight()}>
      {articleElements}
    </ul>
  );
}

ArticleList.defaultProps = {
  articles: [],
  className: '',
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
};

export default ArticleList;

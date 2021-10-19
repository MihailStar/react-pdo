import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

function ArticleList(props) {
  const { articles } = props;
  const articleElements = articles.map((article) => (
    <li key={article.id}>
      <Article article={article} />
    </li>
  ));

  return <ul>{articleElements}</ul>;
}

ArticleList.defaultProps = {
  articles: [],
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
};

export default ArticleList;

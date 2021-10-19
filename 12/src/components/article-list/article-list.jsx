import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Article from '../article/article';
import './article-list.scss';

class ArticleList extends PureComponent {
  constructor(props) {
    super(props);

    const { articles } = this.props;

    this.state = {
      openArticleId: articles[0].id,
    };
  }

  toggle = (articleId) => {
    const { openArticleId } = this.state;

    this.setState({
      openArticleId: articleId === openArticleId ? null : articleId,
    });
  };

  render() {
    const { articles, className } = this.props;
    const { openArticleId } = this.state;
    const articleElements = articles.map((article) => (
      <li className="article-list__item" key={article.id}>
        <Article
          article={article}
          className="article-list__article"
          isOpen={article.id === openArticleId}
          onButtonClick={() => {
            this.toggle(article.id);
          }}
        />
      </li>
    ));

    return (
      <ul className={`article-list ${className}`.trimRight()}>
        {articleElements}
      </ul>
    );
  }
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

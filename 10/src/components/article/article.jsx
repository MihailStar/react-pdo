import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './article.scss';

class Article extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.defaultOpen,
    };
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { defaultOpen } = this.props;

    if (nextProps.defaultOpen !== defaultOpen) {
      this.setState({
        isOpen: nextProps.defaultOpen,
      });
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   const { isOpen } = this.state;

  //   return isOpen !== nextState.isOpen;
  // }

  toggle = () => {
    const { isOpen } = this.state;

    this.setState({
      isOpen: !isOpen,
    });
  };

  render() {
    const { article, className } = this.props;
    const { isOpen } = this.state;
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
          <button className="button" type="button" onClick={this.toggle}>
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
  defaultOpen: false,
};

Article.propTypes = {
  article: PropTypes.shape({
    date: PropTypes.string,
    id: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
  }),
  className: PropTypes.string,
  defaultOpen: PropTypes.bool,
};

export default Article;

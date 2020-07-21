import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import ArticleManager from '../../modules/ArticleManager';

const ArticleList = (props) => {
  // The initial state is an empty array
  const [articles, setArticles] = useState([]);

  const getArticles = () => {
    // After the data comes back from the API, we
    //  use the setArticles function to update state
    return ArticleManager.getAll().then(articlesFromAPI => {
      setArticles(articlesFromAPI)
    });
  };



  // got the articles from the API on the component's first render

  const deleteArticle = (id) => {
    ArticleManager.delete(id)
      .then(() => ArticleManager.getAll().then(setArticles));
  };
  useEffect(() => {
    getArticles();
  }, []);

  // Mapping through the articles array to create a list of article cards
  return (
    <>
      

      <div className="container-cards">
        {articles.map(article =>
          <ArticleCard
            key={article.id}
            article={article}
            deleteArticle={deleteArticle}
            {...props}
          />)}
      </div>
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => { props.history.push("/articles/new") }}>
          New Article
  </button>
      </section>
    </>
  );
};
export default ArticleList
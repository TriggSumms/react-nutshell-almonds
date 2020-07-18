import React, { useState } from 'react';
import ArticleManager from '../../modules/ArticleManager';
import './ArticleForm.css'

const ArticleForm = props => {
  const [article, setArticle] = useState({ title: "", synopsis: "", url: "",time:"",userId:"" });
  const [isLoading, setIsLoading] = useState(false);

  //Tracks entries into text boxes
  const handleFieldChange = evt => {
      console.log("what is evt", evt)
    const stateToChange = { ...article };
    console.log("stateToChange", stateToChange)
    console.log("evt.target.id", evt.target.id)
    stateToChange[evt.target.id] = evt.target.value;
    setArticle(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create article      object, invoke the ArticleManager post method, and redirect to the full article list
  */
  const constructNewArticle = evt => {
    evt.preventDefault();
    if (article.title === "" || article.url === "" || article.synopsis === "") {
      window.alert("Please input an article title, url, and a short summary");
    } else {
      setIsLoading(true);
      // Create the article and redirect user to article list
      ArticleManager.postArticle(article)
        .then(() => props.history.push("/articles"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="title"
              placeholder="Article title"
            />
            <label htmlFor="title">Title</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="url"
              placeholder="Article URL"
            />
            <label htmlFor="url">URL</label>

          <input
            type="text"
            required
            onChange={handleFieldChange}
            id="synopsis"
            placeholder="Article synopsis"
            />
            <label htmlFor="synopsis">Synopsis</label>
          </div>

          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewArticle}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default ArticleForm
import React from "react";
import "./ArticleCard.css"


const ArticleCard = props => {

    if (props.article.userId === sessionStorage.getItem("activeUser")) {

  return (

        <div className="card">
                    <div className="card-content">
                        <div className="nameDate">
                            
                        </div>
                         
                           
                        <div className="article__deleteButton">
                           
                            <button type="button" onClick={() => props.deleteArticle(props.article.id)}>Delete</button>
                        </div>
                            
                        
                    </div>
                    <div className="articleTitle">
                        <h3>
                        <a href={props.article.url} alt={props.article.title} target="_blank" rel="noopener noreferrer">{props.article.title} </a>

                        </h3>
                    </div>
                    <div className="article__description">
                        <p>{props.article.synopsis}</p>
                    </div>
                </div>

  ) 
  }
else
  {

    return (
  
          <div className="friendArticleCard">
                      <div className="articleTitle">
                          <h3>
                          <a href={props.article.url} alt={props.article.title} target="_blank" rel="noopener noreferrer">{props.article.title} </a>
  
                          </h3>
                      </div>
                      <div className="article__description">
                          <p>{props.article.synopsis}</p>
                      </div>
                  </div>
                  
  
    ) 
    }

//   );
};

export default ArticleCard;


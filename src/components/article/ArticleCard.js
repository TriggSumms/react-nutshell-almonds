import React from "react";
import "./ArticleCard.css"
import ArticleManager from "./../../modules/ArticleManager"

const ArticleCard = props => {
  return (

        <div className="card">
                    <div className="card-content">
                        <div className="nameDate">
                            
                            
                            {props.article.title} 
                        </div>    
                        <div className="article__deleteButton">
                            {/* <button id="deleteArticleBtn__${props.id}" className="deleteBtn" type="button">&times;</button> */}
                            <button type="button" onClick={() => props.deleteArticle(props.article.id)}>Delete</button>
                        </div>
                    </div>
                    <div className="articleTitle">
                        <h3>{props.title}
                        <a href={props.article.url} alt={props.article.title} target="_blank" rel="noopener noreferrer">{props.article.title} </a>

                        </h3>
                    </div>
                    <div className="article__description">
                        <p>{props.article.synopsis}</p>
                    </div>
                </div>
  )

//     <div className="card">
//       <div className="card-content">
        
//         <h3>
//           Title: <span className="card-articletitle">{props.article.title}</span>
//         </h3>
//         <p>{}</p>
//       </div>
//     </div>
//   );
};

export default ArticleCard;
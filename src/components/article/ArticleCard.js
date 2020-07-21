import React from "react";
import "./ArticleCard.css"


const ArticleCard = props => {

//makes sure that userid is an integer
    const currentUser = parseInt(sessionStorage.getItem("activeUser"))
    if (props.article.userId == currentUser) {

        return (

            <div className="card">
                <div className="card-content">
                    <div className="nameDate">

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
                <div className="article__deleteButton">

                        <button type="button" onClick={() => props.deleteArticle(props.article.id)}>Delete</button>
                    </div>
            </div>
            

        )
    }
    else {

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


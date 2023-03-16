import React from 'react';

function Article({ article }) {
    const body = <section>{article.info}</section>

    return (
        <div >
            <h2>{article.name}</h2>
            <h3>{article.universe}</h3>
            {body}
        </div>
    );
}
export default Article;
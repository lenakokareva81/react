import React, { Component } from 'react';
import articles from './info';
import Article from './Article';

function Listarticles(props) {

    return articles
        .filter((article) => article.universe == props.universe)
        .map((article, i) => < Article article={article} key={i} />)
}

export default Listarticles;
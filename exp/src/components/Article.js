import React, { Component } from 'react';
// import styles from './article.module.css';
// import * as classnames from 'classnames';

class Article extends Component {
    state = {
        isOpen: false
    }

    render() {
        const { article } = this.props
        const body = this.state.isOpen && <section>{article.info}</section>
        // const className = classnames(
        //     styles.article,
        //     {
        //         [styles.article__success]: this.props.success,
        //     },
        // );

        return (
            <div >
                <h2>{article.name}</h2>
                <h3>{article.universe}</h3>
                <img src={article.url}></img>
                <button onClick={this.handleClick}>
                    {this.state.isOpen ? "свернуть" : "подробнее"}
                </button>
                {body}
            </div>
        );
    }
    handleClick = () => {

        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}


// function handleClick() {
//     console.log("jkfdshs")
// }

export default Article;
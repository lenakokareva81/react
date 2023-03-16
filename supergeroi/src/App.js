
// import '../App.css';
import React from 'react';
import Article from './components/Article';
import articles from './components/info';

function App() {
  // let univ = "Marvel Comics"
  return (
    <div >
      <h2>name</h2>
      <button onClick={handleClick("Marvel Comics")}>Marvel Comics</button>
      <button>DC Comics</button>
      <button>все</button>

      {
        // let univ = "Marvel Comics"
        // console.log(univ)
        articles
          // .filter((article) => article.universe == "Marvel Comics")
          .map((article) => < Article article={article} />)

      }


    </div>
  );
}
function handleClick(universe) {
  console.log({ universe })
}

export default App;

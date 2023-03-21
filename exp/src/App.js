// import '../App.css';
import React from 'react';
import Article from './components/Article';
import articles from './components/info';
// import Listarticles from './components/Listarticles'

function App() {
  // let univ = "Marvel Comics"
  return (
    <div >
      <h2>name</h2>
      <button >Marvel Comics</button>
      <button>DC Comics</button>
      <button>все</button>
      {/* <Listarticles universe="Marvel Comics"></Listarticles> */}

      {
        // let univ = "Marvel Comics"

        articles
          // .filter((article) => article.universe == univ)
          .map((article) => < Article article={article} key={article.id} />)

      }
      {/* {console.log(univ)} */}

    </div>
  );
}

// const handler = (universe) => () => {
//   console.log(universe)
// }

// function handler_1(universe) {
//   return function () {
//     console.log(universe)
//   }
// }

// function handleClick(universe) {
//   console.log({ universe })
// }

export default App;

import React, { useState } from 'react'
import axios from 'axios'
import styles from "./App.module.scss";
import Search from './Components/Search'
import Results from './Components/Results'
import Popup from './Components/Popup'

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiurl = "http://www.omdbapi.com/?apikey=ea96db73";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className={styles.App}>
      <header>
        <h1>You've been Filmed!
        </h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} openPopup={openPopup} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default App

// import React,  { Component } from "react";
// import styles from "./App.module.scss";
// import Search from './componants/Search'
// import Results from "./componants/Results"


// class App extends Component {
//  state = {
//     searchQuery: "",
//     results: [],
//     selected:{}
//   };

//   search = (searchTerm) => {
//     fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ea96db73search.php?s=${searchTerm}`)
//       .then((res) => res.json())
//       .then((res) => {
//         this.setState({results: results});
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//   };


//   handleInput = (event) => {
//     let searchQuery = event.target.value;
//     this.setState(searchQuery)
//   }

//   render() {
//     return (
//       <>
//         <div className="App">
//           <header>
//             <h1>Movie Database</h1>
//           </header>
//           <main>
//             <Search handleInput={handleInput} search={search}/>
//             <Results results={this.state.results} />
//           </main>
//         </div>
//       </>
//     );
//   }
// }

// export default App;

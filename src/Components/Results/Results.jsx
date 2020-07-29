import React from 'react'
import styles from "./Results.module.scss";
import Result from '../Result'

function Results ({ results, openPopup }) {
	return (
		<section className="results">
			{results.map(result => (
				<Result key={result.imdbID} result={result} openPopup={openPopup} />
			))}
		</section>
	)
}

export default Results


// import React, { Component } from "react";
// import styles from "./Results.module.scss";
// import Result from "../Result"

// class Results extends Component {
  
//   render() {

//     const {results} =this.props;
//     return (
//       <section className={styles.results}>
//         {results.map(result => (
//           <Result key={result.imdbID} result={result} /> 
//         ))}
//       </section>
//     );
//   };
// }
// export default Results;

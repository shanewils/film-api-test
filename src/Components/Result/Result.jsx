import React from 'react'
import styles from "./Result.module.scss";
function Result({ result, openPopup }) {
	return (
		<div className={styles.result} onClick={() => openPopup(result.imdbID)}>
			<img src={result.Poster} />
			<div className={styles.info}>
				<h3>{result.Title}</h3>
				<h3>{result.Year}</h3>
			</div>
		</div>
	)
}

export default Result


// import React, { Component } from "react";
// import styles from "./Result.module.scss";

// class Result extends Component{

//   render (){
//     const { result } = this.props;
//     return (
//       <div className={styles.result}>
//         <img src={result.Poster} alt={result.Title}/>
//         <h3>{result.Title}</h3>
//       </div>
//     );
//   };
// }
// export default Result;

import React from 'react'
import styles from "./Search.module.scss";

function Search ({ handleInput, search }) {
	return (
		<section className="searchbox-wrap">
			<input 
				type="text" 
				placeholder="Search for a movie..." 
				className={styles.searchbox} 
				onChange={handleInput}
				onKeyPress={search}
			/>
		</section>
	)
}

export default Search



// import React, { Component } from "react";
// import styles from "./Search.module.scss";

// class Search extends Component {
//   render(){
//   const {handleInput, search} = this.props;
//     return (
//       <>
//         <section className="styles.searchbox-wrap"> 
//           <input 
//             type="text" 
//             placeholder="Search for a Movie..." 
//             className={styles.searchbox}
//             onChange={handleInput}
//             onKeyPress={search}
//           />
//         </section>
//       </>
//     );
//   };  
// }

// export default Search;
